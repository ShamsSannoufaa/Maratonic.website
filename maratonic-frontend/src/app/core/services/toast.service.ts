import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private subject = new Subject<string>();
  message$ = this.subject.asObservable();

  success(msg: string) { this.subject.next(msg); }
  error(msg: string) { this.subject.next(msg); }
}
