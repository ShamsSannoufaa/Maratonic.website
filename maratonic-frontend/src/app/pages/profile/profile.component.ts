import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent implements OnInit {

  user: any = {
    name: "",
    email: "",
    country: "",
    city: "",
    club: "",
    category: "",
    pace: "",
    birthday: "",
    phone: "",
    startYear: ""
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserFromToken();
  }

  loadUserFromToken() {
    const token = this.auth.getToken();
    if (!token) return;

    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));

      this.user.name = `${decoded.firstName ?? ""} ${decoded.lastName ?? ""}`.trim();
      this.user.email = decoded.email ?? "";

    } catch (err) {
      console.error("Token decode error", err);
    }
  }
}
