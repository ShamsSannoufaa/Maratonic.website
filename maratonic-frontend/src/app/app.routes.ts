import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RacesListComponent } from './pages/races/races-list/races-list.component';
import { RaceDetailComponent } from './pages/races/race-detail/race-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  // --- Public Routes ---
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Layout altında çalışan authenticated routes
  {
    path: '',
    component: LayoutComponent,
    children: [

      // --- Home ---
      { path: '', component: HomeComponent },

      // --- User Protected Pages ---
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

      {
        path: 'profile/edit',
        loadComponent: () =>
          import('./pages/profile/edit-profile/edit-profile.component')
            .then(c => c.EditProfileComponent),
        canActivate: [AuthGuard]
      },

      { path: 'races', component: RacesListComponent },
      {
        path: 'races/:id',
        component: RaceDetailComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'calendar',
        loadComponent: () =>
          import('./pages/calendar/calendar.component')
            .then(m => m.CalendarComponent),
        canActivate: [AuthGuard]
      },

      // --- Admin Pages ---
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.routes')
            .then(m => m.ADMIN_ROUTES),
        canActivate: [AuthGuard]
      },

      // 404 inside layout
      { path: '**', component: NotFoundComponent }
    ]
  }
];
