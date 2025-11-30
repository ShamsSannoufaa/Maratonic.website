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

  // BACKENDDEN YARIŞ LİSTESİ ÇEK
  getRaces(): Observable<RaceModel[]> {
    return this.http.get<RaceModel[]>(API_ENDPOINTS.RACES.LIST);
  }

  // BACKENDDEN TEK YARIŞ DETAYI ÇEK
  getRaceById(id: number): Observable<RaceModel> {
    return this.http.get<RaceModel>(API_ENDPOINTS.RACES.DETAIL(id));
  }
}
