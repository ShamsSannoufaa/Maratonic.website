import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../../core/services/races.service';
import { RaceModel } from '../../../core/models/race.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-races-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css']
})
export class RacesListComponent implements OnInit {

  races: RaceModel[] = [];

  constructor(private racesService: RacesService) {}

  ngOnInit(): void {
    this.racesService.getRaces().subscribe({
      next: (data) => this.races = data,
      error: (err) => console.error(err)
    });
  }
}
