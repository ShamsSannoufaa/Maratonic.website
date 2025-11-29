import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/api-endpoints';

@Injectable({ providedIn: 'root' })
export class RegistrationService {

  constructor(private http: HttpClient) {}

  registerForRace(data: any) {
    return this.http.post(API.REGISTER_RACE, data);
  }

  getMyRegistrations() {
    return this.http.get(API.MY_REGISTRATIONS);
  }
}
