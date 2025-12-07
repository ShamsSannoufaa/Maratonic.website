import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../constants/api-endpoints';
import { RaceModel } from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) {}

  // ===============================
  // GET ALL RACES
  // ===============================
  getRaces(): Observable<RaceModel[]> {
    return this.http.get<RaceModel[]>(API_ENDPOINTS.RACES.LIST);
  }

  // ===============================
  // GET RACE BY ID
  // ===============================
  getRaceById(id: number): Observable<RaceModel> {
    return this.http.get<RaceModel>(API_ENDPOINTS.RACES.DETAIL(id));
  }

  // ===============================
  // REGISTER TO RACE
  // ===============================
  registerToRace(raceId: number): Observable<any> {
    return this.http.post(API_ENDPOINTS.REGISTRATION.REGISTER, { raceId });
  }

  // ===============================
  // GET USER’S REGISTERED RACES
  // ===============================
  getMyRaces(): Observable<any[]> {
    return this.http.get<any[]>(API_ENDPOINTS.REGISTRATION.MY_RACES);
  }

  // ===============================
  // CREATE NEW RACE (Admin)
  // ===============================
  createRace(data: any): Observable<any> {
    return this.http.post(API_ENDPOINTS.RACES.CREATE, data);
  }

  // ===============================
  // UPDATE RACE (Admin)
  // ===============================
  updateRace(data: any): Observable<any> {
    return this.http.put(API_ENDPOINTS.RACES.UPDATE, data);
  }

  // ===============================
  // DELETE RACE (Admin)
  // ===============================
  deleteRace(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.RACES.DELETE(id));
  }
}
