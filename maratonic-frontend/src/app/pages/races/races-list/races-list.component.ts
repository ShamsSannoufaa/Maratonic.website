import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-races-list',
  standalone: true,
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css'],
  imports: [CommonModule, RouterLink]
})
export class RacesListComponent implements OnInit {

  races: RaceModel[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private racesService: RacesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // SSR kontrolü kaldırıldı → CSR modunda istek atıyor.
    this.loadRaces();
  }

  loadRaces(): void {
    this.loading = true;

    this.racesService.getRaces().subscribe({
      next: (res) => {
        this.races = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Yarışlar yüklenirken bir sorun oluştu.';
        console.error('Races error:', err);
      }
    });
  }

  openRace(id: number) {
    this.router.navigate(['/races', id]);
  }
}
