import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RacesService } from '../../../core/services/races.service';

interface RaceCard {
  id: number;
  name: string;
  location: string;
  date: string;
  distance: string;
  fee: number;
  isRegistered: boolean;
}

@Component({
  selector: 'app-races-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css']
})
export class RacesListComponent implements OnInit {

  races: RaceCard[] = [];

  constructor(private racesService: RacesService) {}

  ngOnInit() {
    console.log("📌 RacesListComponent initialized");
    this.loadRacesFromBackend();
  }

  loadRacesFromBackend() {
    console.log("📡 Backend'e istek gönderiliyor...");

    this.racesService.getAllRaces().subscribe({
      next: (res) => {
        console.log("🎉 Backend races → ", res);
        this.races = res;
      },
      error: (err) => {
        console.error("❌ Race fetch error:", err);
      }
    });
  }

  getRemaining(race: RaceCard) {
    const now = Date.now();
    const target = new Date(race.date).getTime();
    const diffMs = target - now;

    if (diffMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, isPast: true };
    }

    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return { days, hours, minutes, isPast: false };
  }
}
