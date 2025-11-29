import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/api-endpoints';

@Injectable({ providedIn: 'root' })
export class PaymentService {

  constructor(private http: HttpClient) {}

  pay(data: any) {
    return this.http.post(API.PAY, data);
  }

  refund(data: any) {
    return this.http.post(API.REFUND, data);
  }
}
