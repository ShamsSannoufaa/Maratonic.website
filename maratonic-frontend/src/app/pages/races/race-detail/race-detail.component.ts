import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';

@Component({
  selector: 'app-race-detail',
  standalone: true,
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css'],
  imports: [CommonModule, DatePipe, RouterLink],
})
export class RaceDetailComponent implements OnInit {

  race: RaceModel | null = null;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private racesService: RacesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = "Geçersiz yarış ID.";
      this.loading = false;
      return;
    }

    this.loadRace(id);
  }

  private loadRace(id: number): void {
    this.racesService.getRaceById(id).subscribe({
      next: (data) => {
        if (!data) {
          this.errorMessage = "Yarış bulunamadı.";
          this.loading = false;
          return;
        }

        this.race = {
          ...data,
          banner: data.banner?.trim()
            ? data.banner
            : 'assets/defaults/race-default.jpg'
        };

        this.loading = false;
      },
      error: (err) => {
        console.error("Race detail error:", err);
        this.errorMessage = "Yarış bilgileri yüklenirken bir hata oluştu.";
        this.loading = false;
      }
    });
  }
}
