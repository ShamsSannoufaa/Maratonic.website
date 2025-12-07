import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  standalone: true,
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EditProfileComponent implements OnInit {

  form!: FormGroup;
  passwordForm!: FormGroup;

  saving = false;
  changingPassword = false;
  successMessage = "";
  passwordSuccess = "";

  // SHOW/HIDE STATES
  showOldPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthYear: [''],
      country: [''],
      city: [''],
      club: [''],
      category: [''],
      pace: [''],
      emergencyContact: ['']
    });

    this.passwordForm = this.fb.group({
      oldPassword: [''],
      newPassword: [''],
      confirmPassword: ['']
    });

    this.loadProfile();
  }

  get passwordsMatch(): boolean {
    const p = this.passwordForm.value;
    return p.newPassword && p.confirmPassword && p.newPassword === p.confirmPassword;
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (res) => {
        this.form.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          gender: res.gender,
          birthYear: res.birthYear,
          country: res.country,
          city: res.city,
          club: res.club,
          category: res.category,
          pace: res.pace,
          emergencyContact: res.emergencyContact
        });
      },
      error: () => console.error("Profile cannot be loaded.")
    });
  }

  save() {
    if (this.form.invalid) return;

    this.saving = true;

    this.profileService.updateProfile(this.form.value).subscribe({
      next: () => {
        this.successMessage = "Profile updated successfully!";
        setTimeout(() => {
          this.saving = false;
          this.router.navigate(['/profile']);
        }, 1200);
      },
      error: () => {
        this.saving = false;
        alert("Error updating profile.");
      }
    });
  }

  changePassword() {
    if (!this.passwordsMatch) return;

    this.changingPassword = true;

    const payload = {
      oldPassword: this.passwordForm.value.oldPassword,
      newPassword: this.passwordForm.value.newPassword
    };

    this.profileService.changePassword(payload).subscribe({
      next: () => {
        this.passwordSuccess = "Password updated successfully!";
        this.changingPassword = false;
        this.passwordForm.reset();
      },
      error: () => {
        this.changingPassword = false;
        alert("Error updating password.");
      }
    });
  }
}
