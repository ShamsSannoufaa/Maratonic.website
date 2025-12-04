import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private api = 'https://localhost:7280/api/users';

  constructor(private http: HttpClient) {}

  /** GET /users/me — Kullanıcı profilini getirir */
  getProfile(): Observable<any> {
    return this.http.get(`${this.api}/me`);
  }

  /** PUT /users/update — Profili günceller */
  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.api}/update`, data);
  }

  /** PUT /users/change-password — Şifre değiştirir */
  changePassword(data: any): Observable<any> {
    return this.http.put(`${this.api}/change-password`, data);
  }
}
