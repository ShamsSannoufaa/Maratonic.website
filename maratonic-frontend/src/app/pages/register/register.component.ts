import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  submit() {
    this.errorMessage = '';

    // Form valid değilse
    if (this.form.invalid) {
      this.errorMessage = "All fields are required.";
      return;
    }

    // Şifre eşleşmiyorsa
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    // Backend’e gönderilecek gerçek payload
    const payload = {
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password
      // confirmPassword backend'e gönderilmez
    };

    this.loading = true;

    this.auth.register(payload).subscribe({
      next: (res: any) => {
        this.loading = false;

        // Eğer backend kayıt sonrası token döndürürse
        if (res?.token) {
          this.auth.saveToken(res.token);
          this.router.navigate(['/profile']);
          return;
        }

        // Standart kayıt → login'e yönlendir
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;

        if (err?.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.status === 400) {
          this.errorMessage = "Invalid registration data.";
        } else {
          this.errorMessage = "Registration failed.";
        }

        console.error("Register error:", err);
      }
    });
  }
}
