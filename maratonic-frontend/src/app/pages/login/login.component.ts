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
    console.log("SUBMIT TETİKLENDİ!");

    if (this.form.invalid) return;

    this.loading = true;

    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        this.loading = false;

        if (res.token) {
          this.auth.saveToken(res.token);
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = "Invalid response";
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message || "Login failed";
      }
    });
  }
}
