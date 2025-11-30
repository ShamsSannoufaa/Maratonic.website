import { Routes } from '@angular/router';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RacesListComponent } from './pages/races/races-list/races-list.component';
import { RaceDetailComponent } from './pages/races/race-detail/race-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

  // --- Public Routes ---
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // --- User Pages ---
  { path: 'profile', component: ProfileComponent },

  {
    path: 'profile/edit',
    loadComponent: () =>
      import('./pages/profile/edit-profile/edit-profile.component')
      .then(c => c.EditProfileComponent)
  },

  { path: 'races', component: RacesListComponent },
  { path: 'races/:id', component: RaceDetailComponent },

  // --- Admin Pages (Standalone Lazy) ---
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  // --- 404 ---
  { path: '**', component: NotFoundComponent }
];
