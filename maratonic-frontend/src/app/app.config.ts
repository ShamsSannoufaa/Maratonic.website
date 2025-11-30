import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

// 🔥 Reactive Forms'un global olarak eklenmesi gerekiyor
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideHttpClient(
      withInterceptors([
        AuthInterceptor,
        ErrorInterceptor
      ])
    ),

    // ⭐⭐⭐ KRİTİK SATIR: ReactiveFormsModule global olarak import ediliyor ⭐⭐⭐
    importProvidersFrom(ReactiveFormsModule)
  ]
};
