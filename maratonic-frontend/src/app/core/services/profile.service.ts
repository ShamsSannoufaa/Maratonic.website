import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  fakeProfile: ProfileModel = {
    userId: 101,
    name: "Seda Yılmaz",
    email: "seda@example.com",
    registeredRaces: [
      {
        raceId: 1,
        name: "Istanbul Half Marathon",
        date: "2025-03-15T09:00:00",
        status: "Registered"
      },
      {
        raceId: 4,
        name: "Ankara Night Run",
        date: "2025-06-12T20:00:00",
        status: "Payment Pending"
      }
    ],
    pastRaces: [
      {
        raceId: 99,
        name: "Izmir 10K",
        date: "2024-11-05T09:00:00",
        finishTime: "00:54:13"
      }
    ]
  };

  getProfile(): Observable<ProfileModel> {
    return of(this.fakeProfile);
  }
}
