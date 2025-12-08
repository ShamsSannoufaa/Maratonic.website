import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {

  form: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  submit(): void {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.errorMessage = 'Lütfen tüm alanları doldurun.';
      return;
    }

    this.loading = true;

    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        this.loading = false;

        if (!res?.token) {
          this.errorMessage = "Geçersiz sunucu yanıtı.";
          return;
        }

        // Token kaydet
        this.auth.saveToken(res.token);

        // Profil veya Anasayfaya yönlendir
        this.router.navigate(['/']);
      },

      error: (err) => {
        this.loading = false;

        this.errorMessage =
          err?.error?.message ||
          "Giriş yapılamadı. Lütfen e-posta ve şifrenizi kontrol edin.";
      }
    });
  }
}
