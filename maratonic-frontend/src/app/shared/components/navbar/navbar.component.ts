import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule,
    NgIf,
    RouterLink,
    RouterLinkActive,RouterModule
  ]
})
export class NavbarComponent {
  isLoggedIn = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
