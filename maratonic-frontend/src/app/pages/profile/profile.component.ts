import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.profileService.getProfile().subscribe({
      next: (res) => {
        this.user = res;

        // SSR ve OnPush durumlarında DOM’un yenilenmesi için zorunlu
        this.cdr.detectChanges();
      },
      error: () => {
        console.error("User could not be loaded.");
      }
    });
  }
}
