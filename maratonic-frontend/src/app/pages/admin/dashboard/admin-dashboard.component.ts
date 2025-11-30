import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [CommonModule]
})
export class AdminDashboardComponent {

  stats = {
    users: 1240,
    races: 18,
    payments: 342,
    revenue: 18250
  };

}

