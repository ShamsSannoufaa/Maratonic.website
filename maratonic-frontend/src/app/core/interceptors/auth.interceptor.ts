import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // CORS preflight (OPTIONS) isteklerine dokunulmaz
  if (req.method === 'OPTIONS') {
    return next(req);
  }

  // Token varsa Authorization ekle
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  } else {
    // Token yoksa sadece Content-Type ekle
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  return next(req);
};
