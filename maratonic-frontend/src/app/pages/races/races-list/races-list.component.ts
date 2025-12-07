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
      error: () => {
        this.loading = false;
        this.errorMessage = 'Failed to load races.';
        this.cdr.detectChanges();
      }
    });
  }

  openRace(id: number) {
    this.router.navigate(['/races', id]);
  }

  // -------------------------
  // COUNTDOWN FUNCTIONS
  // -------------------------
  getDaysLeft(date: string | Date): number {
    const raceDate = new Date(date);
    const today = new Date();

    const diff = raceDate.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  getCountdownLabel(date: string | Date): string {
    const days = this.getDaysLeft(date);

    if (days > 1) return `${days} days left`;
    if (days === 1) return '1 day left';
    if (days === 0) return 'Race is today!';
    return 'Finished';
  }

  // -------------------------
  // STATUS BADGE
  // -------------------------
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
