import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      // --- 401 Unauthorized ---
      if (error.status === 401) {
        console.warn("Unauthorized – token geçersiz veya süresi doldu.");
        authService.logout(); // token silinir
      }

      // --- 403 Forbidden ---
      if (error.status === 403) {
        console.warn("Bu işleme erişim iznin yok.");
      }

      // --- 404 Not Found ---
      if (error.status === 404) {
        console.warn("İstek yapılan API bulunamadı:", req.url);
      }

      // --- 500 Internal Server Error ---
      if (error.status === 500) {
        console.error("Sunucu hatası:", error.error);
      }

      // İstek durmasın → hata fırlatılır
      return throwError(() => error);
    })
  );
};
