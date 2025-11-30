import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  CommonModule,
  NgFor,
  NgClass,
  DatePipe
} from '@angular/common';

import { RacesService } from '../../../core/services/races.service';
import { RaceModel } from '../../../core/models/race.model';

@Component({
  selector: 'app-races-list',
  standalone: true,
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css'],
  imports: [CommonModule, NgFor, NgClass, DatePipe]
})
export class RacesListComponent {
  
  races: RaceModel[] = [];

  constructor(
    private racesService: RacesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.racesService.getRaces().subscribe({
      next: (data: RaceModel[]) => {
        this.races = data.map(r => ({
          ...r,
          banner: r.banner && r.banner.trim() !== ''
            ? r.banner
            : 'assets/defaults/race-default.jpg'
        }));
      },
      error: (err) => console.error("Failed loading races:", err)
    });
  }

  openRace(id: number) {
    this.router.navigate(['/races', id]);
  }
}
