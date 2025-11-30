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

    /** ✔ Form alanları güncellendi */
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  /** ✔ Form Gönderme İşlemi */
  submit() {
    if (this.form.invalid) {
      this.errorMessage = "Lütfen tüm alanları doldurun.";
      return;
    }

    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.errorMessage = "Şifreler eşleşmiyor.";
      return;
    }

    this.errorMessage = "";
    this.loading = true;

    /** ✔ Backend’e gönderilecek model */
    const registerModel = {
      fullName: `${this.form.value.firstName} ${this.form.value.lastName}`,
      birthDate: this.form.value.birthDate,
      country: this.form.value.country,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.register(registerModel).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message || 'Kayıt işlemi başarısız.';
      }
    });
  }

  /** ✔ Login sayfasına git */
  goLogin() {
    this.router.navigate(['/login']);
  }

  /** ✔ Anasayfaya git */
  goHome() {
    this.router.navigate(['/']);
  }
}
