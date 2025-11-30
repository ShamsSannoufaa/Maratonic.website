import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileComponent implements OnInit {

  loading = true;
  errorMessage = '';
  user: any = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.auth.getToken()) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadProfile();
  }

  loadProfile(): void {
    this.auth.getCurrentUser().subscribe({
      next: (res) => {
        this.user = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Profil bilgisi alınamadı.';

        if (err.status === 401) {
          this.auth.logout();
          this.router.navigate(['/login']);
        }
      }
    });
  }
}
