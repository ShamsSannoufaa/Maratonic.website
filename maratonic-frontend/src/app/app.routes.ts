import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RacesListComponent } from './pages/races/races-list/races-list.component';
import { RaceDetailComponent } from './pages/races/race-detail/race-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },

      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

      { 
        path: 'races',
        component: RacesListComponent
      },

      { 
        path: 'races/:id',
        component: RaceDetailComponent 
      },
      { 
        path: 'calendar',
        component: CalendarComponent 
      },

      { 
        path: 'admin',
        component: AdminDashboardComponent ,  canActivate: [AuthGuard]
      },

      { path: '**', component: NotFoundComponent }
    ]
  }
];
