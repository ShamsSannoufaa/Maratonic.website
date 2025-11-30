import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-race-calendar',
  standalone: true,
  templateUrl: './race-calendar.component.html',
  styleUrls: ['./race-calendar.component.css'],
  imports: [CommonModule, DatePipe, RouterLink]
})
export class RaceCalendarComponent {

  groupedRaces: { monthName: string, items: RaceModel[] }[] = [];

  constructor(private racesService: RacesService) {}

  ngOnInit() {
    this.racesService.getRaces().subscribe({
      next: races => {
        const groups: any = {};

        races.forEach(r => {
          const date = new Date(r.date);
          const month = date.toLocaleString('tr-TR', { month: 'long' }).toUpperCase();

          if (!groups[month]) groups[month] = [];
          groups[month].push(r);
        });

        this.groupedRaces = Object.keys(groups).map(m => ({
          monthName: m,
          items: groups[m]
        }));
      }
    });
  }
}
