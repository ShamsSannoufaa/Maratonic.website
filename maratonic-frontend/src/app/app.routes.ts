import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RacesListComponent } from './pages/races/races-list/races-list.component';
import { RaceDetailComponent } from './pages/races/race-detail/race-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },

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

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: 'profile', component: ProfileComponent },

      { path: 'races', component: RacesListComponent },
      { path: 'races/:id', component: RaceDetailComponent },{
  path: 'calendar',
  loadComponent: () =>
    import('./pages/calendar/calendar.component').then(m => m.CalendarComponent)
},

      {
        path: 'admin',
        children: [
          { path: '', component: AdminDashboardComponent }
        ]
      },

      { path: '**', component: NotFoundComponent }
      

    ]
  }
];
