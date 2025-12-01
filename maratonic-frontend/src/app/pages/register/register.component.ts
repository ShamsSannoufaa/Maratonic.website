import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class RegisterComponent {

  form: FormGroup;
  loading = false;

  // Toast states
  showToast = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  showToastMessage(type: 'success' | 'error', message: string) {
    this.toastType = type;
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  submit(): void {
    if (this.form.invalid) {
      this.showToastMessage('error', 'Please fill all fields correctly.');
      return;
    }

    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.showToastMessage('error', 'Passwords do not match.');
      return;
    }

    const payload = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.loading = true;

    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.showToastMessage('success', 'Account created successfully!');
      },
      error: (err) => {
        this.loading = false;

        const msg = err.error?.message || 'Registration failed.';
        this.showToastMessage('error', msg);
      }
    });
  }
}
