import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RacesService } from '../../../core/services/races.service';
import { ToastService } from '../../../core/services/toast.service';
import { ToastComponent } from '../../../shared/toast/toast.component';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [CommonModule, FormsModule,ToastComponent]
})
export class AdminDashboardComponent implements OnInit {

  stats = {
    users: 1240,
    races: 18,
    payments: 342,
    revenue: 18250
  };

  races: any[] = [];

  newRace: any = {
    name: '',
    date: '',
    registrationFee: null,
    location: '',
    description: '',
    capacity: null,
    distance: '',
    banner: '',
    difficultyLevel: '',
    surfaceType: '',
    elevationGain: null,
    status: ''
  };

  constructor(
    private racesService: RacesService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.loadRaces();
  }

  loadRaces() {
    this.racesService.getRaces().subscribe({
      next: (res) => this.races = res,
      error: () => this.toast.error("Failed to load races")
    });
  }

  createRace() {
    this.racesService.createRace(this.newRace).subscribe({
      next: () => {
        this.toast.success("Race created successfully!");
        this.newRace = {}; // form reset
        this.loadRaces();
      },
      error: () => this.toast.error("Race creation failed")
    });
  }

  deleteRace(id: number) {
    this.racesService.deleteRace(id).subscribe({
      next: () => {
        this.toast.success("Race deleted!");
        this.loadRaces();
      },
      error: () => this.toast.error("Delete failed")
    });
  }
}
