import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RaceModel } from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor() {}

  fakeRaces: RaceModel[] = [
    {
      raceId: 1,
      name: "Istanbul Half Marathon",
      date: "2025-03-15T09:00:00",
      location: "İstanbul",
      description: "A scenic half-marathon along the Bosphorus.",
      registrationFee: 350,
      banner: "https://source.unsplash.com/random/800x600?marathon",
      distance: "21K",
      status: "Open"
    },
    {
      raceId: 2,
      name: "Izmir Marathon",
      date: "2025-04-21T08:30:00",
      location: "İzmir",
      description: "A fast and flat marathon perfect for PB attempts.",
      registrationFee: 400,
      banner: "https://source.unsplash.com/random/800x600?running",
      distance: "42K",
      status: "Open"
    },
    {
      raceId: 3,
      name: "Cappadocia Trail 21K",
      date: "2025-10-18T07:00:00",
      location: "Nevşehir",
      description: "A beautiful trail race between Cappadocia valleys.",
      registrationFee: 550,
      banner: "https://source.unsplash.com/random/800x600?trail",
      distance: "21K",
      status: "Closed"
    }
  ];

  getRaces(): Observable<RaceModel[]> {
    return of(this.fakeRaces);
  }
  getRaceById(id: number): Observable<RaceModel | null> {
  const found = this.fakeRaces.find(r => r.raceId === id);
  return of(found || null);
}

}
