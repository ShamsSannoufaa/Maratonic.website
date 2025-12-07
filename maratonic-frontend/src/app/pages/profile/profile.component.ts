import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { ProfileService } from '../../core/services/profile.service';
import { RacesService } from '../../core/services/races.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent implements OnInit {

  user: any = {};
  myRaces: any[] = [];
  loadingUser = true;
  loadingRaces = true;

  constructor(
    private auth: AuthService,
    private profileService: ProfileService,
    private racesService: RacesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadUserProfile();
    this.loadMyRaces();
  }

  /* ---------------------------------------------
     LOAD USER WITH FIRST + LAST NAME SUPPORT
  --------------------------------------------- */
  loadUserProfile() {
    this.profileService.getProfile().subscribe({
      next: (res) => {

        this.user = res;

        // 🔥 Backend "firstName" ve "lastName" döndürüyorsa → name oluştur
        const first = res.firstName ?? "";
        const last = res.lastName ?? "";

        this.user.name = `${first} ${last}`.trim();

        this.loadingUser = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loadingUser = false;
        console.error("User could not be loaded.");
      }
    });
  }

  /* ---------------------------------------------
     LOAD REGISTERED RACES
  --------------------------------------------- */
  loadMyRaces() {
    this.racesService.getMyRaces().subscribe({
      next: async (regs: any[]) => {
        const races = await Promise.all(
          regs.map(r => this.racesService.getRaceById(r.raceId).toPromise())
        );
        this.myRaces = races;
        this.loadingRaces = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loadingRaces = false;
        console.error("Failed to load races");
      }
    });
  }
}
