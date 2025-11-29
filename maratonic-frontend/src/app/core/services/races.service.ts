import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/api-endpoints';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RacesService {

  constructor(private http: HttpClient) {}

  getAllRaces(): Observable<any> {
    return this.http.get(API.RACES_LIST);
  }

  getRaceById(id: number): Observable<any> {
    return this.http.get(API.RACE_DETAIL(id));
  }
}
