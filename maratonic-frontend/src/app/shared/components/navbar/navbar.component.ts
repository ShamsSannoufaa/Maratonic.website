import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isMenuOpen = false;
  isAdmin = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      const token = this.auth.getToken();
      this.isLoggedIn = !!token;

      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));

          // Role claim array olabilir → normalize et
          const role =
            payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
            payload["role"] ||
            payload["roles"];

          this.isAdmin = role === "ADMIN" || role?.includes?.("ADMIN");

        } catch (e) {
          console.error("JWT parse error:", e);
          this.isAdmin = false;
        }
      }

    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
