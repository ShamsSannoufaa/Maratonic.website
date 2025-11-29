import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Shared
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

// Pages
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { RacesListComponent } from '../pages/races/races-list/races-list.component';
import { RaceDetailComponent } from '../pages/races/race-detail/race-detail.component';
import { AdminDashboardComponent } from '../pages/admin/dashboard/admin-dashboard.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,

    // Shared
    NavbarComponent,
    FooterComponent,

    // Pages - ⭐ ROUTE ÇALIŞMASI İÇİN ZORUNLU ⭐
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RacesListComponent,
    RaceDetailComponent,
    AdminDashboardComponent,
    NotFoundComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
