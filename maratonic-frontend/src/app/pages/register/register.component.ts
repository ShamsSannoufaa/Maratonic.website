import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {

  form: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  submit(): void {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.errorMessage = 'Lütfen tüm alanları eksiksiz doldurun.';
      return;
    }

    // Şifreler uyuşuyor mu?
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.errorMessage = 'Şifreler uyuşmuyor.';
      return;
    }

    const payload = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      birthDate: this.form.value.birthDate,
      country: this.form.value.country
      // confirmPassword backend'e gönderilmiyor!
    };

    this.loading = true;

    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;

        if (err.error?.errors && Array.isArray(err.error.errors)) {
          this.errorMessage = err.error.errors.join(', ');
        } else {
          this.errorMessage = err.error?.message || 'Kayıt işlemi başarısız oldu.';
        }
      }
    });
  }
}
