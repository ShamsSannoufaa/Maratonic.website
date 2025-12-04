import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { Observable } from 'rxjs';
import { RaceModel } from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) {}

  // TÜM YARIŞLAR
  getRaces(): Observable<RaceModel[]> {
    return this.http.get<RaceModel[]>(API_ENDPOINTS.RACES.LIST);
  }

  // TEK YARIŞ DETAY
  getRaceById(id: number): Observable<RaceModel> {
    return this.http.get<RaceModel>(API_ENDPOINTS.RACES.DETAIL(id));
  }

  // YARIŞA KAYIT
  registerToRace(raceId: number): Observable<any> {
    return this.http.post(API_ENDPOINTS.REGISTRATION.REGISTER, {
      raceId: raceId
    });
  }

  // ✔ KULLANICININ KAYITLI OLDUĞU YARIŞLAR
  getMyRaces(): Observable<any[]> {
    return this.http.get<any[]>(API_ENDPOINTS.REGISTRATION.MY_RACES);
  }
}
