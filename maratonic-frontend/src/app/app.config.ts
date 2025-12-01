import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    // 📌 ROUTER
    provideRouter(routes),

    // 📌 HttpClient (FETCH KALDIRILDI — self-signed SSL sorununu çözüyor)
    provideHttpClient(
      withInterceptors([
        AuthInterceptor,
        ErrorInterceptor
      ])
    ),

    // 📌 ReactiveForms Module
    importProvidersFrom(ReactiveFormsModule)
  ]
};
