import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(API_ENDPOINTS.AUTH.REGISTER, data);
  }

  login(data: any) {
    return this.http.post(API_ENDPOINTS.AUTH.LOGIN, data);
  }

  getCurrentUser() {
    return this.http.get(API_ENDPOINTS.AUTH.ME); // ✔ PROFIL
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
