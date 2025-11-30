import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage = '';
  loading = false;

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

  submit() {
    console.log("Login form submitted.");

    // Form geçerli değilse dur
    if (this.form.invalid) {
      this.errorMessage = 'E-posta ve şifre gereklidir.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        this.loading = false;

        // Backend düzgün JWT döndüyse
        if (res && res.token) {
          this.auth.saveToken(res.token);
          console.log("Login successful. Token saved.");
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = "Sunucudan geçersiz yanıt alındı.";
        }
      },
      error: (err) => {
        this.loading = false;

        // Backend hata mesajı dolu ise
        if (err?.error?.message) {
          this.errorMessage = err.error.message;
        }
        // Backend generic hata döndüyse
        else if (err.status === 401) {
          this.errorMessage = "E-posta veya şifre hatalı.";
        }
        else {
          this.errorMessage = "Giriş sırasında bir hata oluştu.";
        }

        console.error("Login error:", err);
      }
    });
  }
}
