import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getDashboardStats() {
    return of({
      totalRaces: 12,
      upcomingRaces: 4,
      totalParticipants: 8420,
      completedPayments: 6930,
      monthlyRevenue: 128000
    });
  }

  getAdminRaceList() {
    return of([
      {
        raceId: 1,
        name: "Istanbul Half Marathon",
        date: "2025-03-15",
        participants: 2500,
        revenue: 875000
      },
      {
        raceId: 2,
        name: "Izmir Marathon",
        date: "2025-04-21",
        participants: 3200,
        revenue: 1280000
      }
    ]);
  }
}
