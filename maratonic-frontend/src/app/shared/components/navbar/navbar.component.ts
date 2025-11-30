import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;

logout() {
  this.isLoggedIn = false;
  // ileride: authService.logout()
}

}
