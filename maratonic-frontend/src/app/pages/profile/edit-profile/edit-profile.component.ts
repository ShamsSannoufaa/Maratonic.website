import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class EditProfileComponent {

  form!: FormGroup;  // <-- sadece burada tanımlıyoruz

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // <-- Form oluşturma burada yapılır
    this.form = this.fb.group({
      fullName: ['Sueda Ünal'],
      email: ['sueda@mail.com'],
      city: ['İstanbul']
    });
  }

  goBack() {
    console.log("GERİ DÖN ÇALIŞTI");
    this.router.navigate(['/profile']);
  }

  save() {
    console.log("KAYDET ÇALIŞTI");
    console.log("Kaydedilen veri:", this.form.value);
    this.router.navigate(['/profile']);
  }
}
