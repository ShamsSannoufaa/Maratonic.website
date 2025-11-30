import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // 🔥 HttpClient artık fetch API ile birlikte çalışıyor
    provideHttpClient(
      withFetch(),   // ← EKLENEN KRİTİK SATIR
      withInterceptors([
        AuthInterceptor,
        ErrorInterceptor
      ])
    ),

    // 🔥 Reactive Forms globalde aktif
    importProvidersFrom(ReactiveFormsModule)
  ]
};
