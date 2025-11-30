import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  CommonModule,
  NgFor,
  NgClass,
  DatePipe
} from '@angular/common';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-races-list',
  standalone: true,
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css'],
  imports: [
    CommonModule,
    NgFor,
    NgClass,
    DatePipe,
    RouterLink
  ]
})
export class RacesListComponent implements OnInit {

  races: RaceModel[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private racesService: RacesService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
        this.errorMessage = 'Yarışlar yüklenirken bir hata oluştu.';
        console.error('Races error:', err);
      }
    });
  }

  openRace(id: number): void {
    this.router.navigate(['/races', id]);
  }
}
