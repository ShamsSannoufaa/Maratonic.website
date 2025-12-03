import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-races-list',
  standalone: true,
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css'],
  imports: [CommonModule, RouterLink]
})
export class RacesListComponent implements OnInit, OnDestroy {

  races: RaceModel[] = [];
  loading = true;
  errorMessage = '';

  private navSub!: Subscription;

  constructor(
    private racesService: RacesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadRaces();

    this.navSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((ev: any) => {
        if (ev.urlAfterRedirects === '/races') {
          this.loadRaces();
        }
      });
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
  }

  loadRaces(): void {
    this.loading = true;

    this.racesService.getRaces().subscribe({
      next: (res) => {
        this.races = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Yarışlar yüklenirken bir sorun oluştu.';
        this.cdr.detectChanges();
      }
    });
  }



  openRace(id: number) {
    this.router.navigate(['/races', id]);
  }
  getStatusClass(status: any): string {
  const s = String(status).toLowerCase();
  return {
    open: 'status-open',
    upcoming: 'status-upcoming',
    closed: 'status-closed',
    finished: 'status-finished'
  }[s] || 'status-upcoming';
}

getStatusLabel(status: any): string {
  const s = String(status).toLowerCase();
  return {
    open: 'Open',
    upcoming: 'Upcoming',
    closed: 'Closed',
    finished: 'Finished'
  }[s] || 'Status';
}

}
