import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RaceDetailModel } from '../models/race-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RaceDetailService {

  fakeRaceDetails: RaceDetailModel[] = [
    {
      raceId: 1,
      bannerImage: "/assets/images/istanbul-half.jpg",
      distance: "21K",
      elevationGain: "120m",
      routeMapUrl: "/assets/maps/istanbul21k.png",
      categories: [
        { name: "21K", fee: 350, capacity: 4000 },
        { name: "10K", fee: 200, capacity: 5000 }
      ],
      rules: [
        "Bib number must be visible.",
        "No headphones allowed on the route.",
        "Stay inside the marked course."
      ]
    }
  ];

  getRaceDetail(id: number): Observable<RaceDetailModel | undefined> {
    return of(this.fakeRaceDetails.find(r => r.raceId === id));
  }
}
