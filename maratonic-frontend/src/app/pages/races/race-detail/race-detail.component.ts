import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-race-detail',
  standalone: true,
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css'],
  imports: [CommonModule, DatePipe]
})
export class RaceDetailComponent {

  race: RaceModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private racesService: RacesService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.racesService.getRaceById(id).subscribe({
      next: (data) => {
        if (!data) return;

        this.race = {
          ...data,
          banner: data.banner && data.banner.trim() !== ''
            ? data.banner
            : 'assets/defaults/race-default.jpg'
        } as RaceModel;
      },
      error: (err) => console.error("Race detail error:", err)
    });
  }
}
