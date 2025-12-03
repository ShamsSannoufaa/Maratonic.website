import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

import { RaceModel } from '../../../core/models/race.model';
import { RacesService } from '../../../core/services/races.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-race-detail',
  standalone: true,
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css'],
  imports: [CommonModule, DatePipe],
})
export class RaceDetailComponent implements OnInit {

  race: RaceModel | null = null;
  loading = true;
  errorMessage = '';

  registering = false;
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private racesService: RacesService,
    public auth: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.errorMessage = 'Geçersiz yarış ID.';
      this.loading = false;
      return;
    }

    this.loadRace(id);
  }

  private loadRace(id: number): void {
    this.loading = true;

    this.racesService.getRaceById(id).subscribe({
      next: (data: any) => {
        console.log('API RESPONSE:', data);

        if (!data) {
          this.errorMessage = 'Yarış bulunamadı.';
          this.loading = false;
          return;
        }

        const raw = data.status?.toString().toLowerCase().trim();
        let statusText = 'Upcoming';

        switch (raw) {
          case '1':
          case 'open':
            statusText = 'Open';
            break;

          case '0':
          case 'upcoming':
            statusText = 'Upcoming';
            break;

          case '2':
          case 'closed':
            statusText = 'Closed';
            break;

          case '3':
          case 'finished':
            statusText = 'Finished';
            break;
        }

        this.race = {
          raceId: data.raceId,
          name: data.name,
          date: data.date,
          location: data.location,
          description: data.description ?? 'Bu yarış için açıklama eklenmemiş.',
          registrationFee: data.registrationFee,
          distance: data.distance ?? 'Belirtilmemiş',
          //banner: data.banner ?? 'assets/default/race-default.jpg',
          status: statusText,
        };

        this.loading = false;
        this.cdr.detectChanges(); // Angular DOM'u yenilemeye zorlanır
      },

      error: (err: any) => {
        console.error('Race detail error:', err);
        this.errorMessage = 'Yarış bilgileri yüklenirken bir hata oluştu.';
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  get isOpen(): boolean {
    return this.race?.status === 'Open';
  }

  goBack(): void {
    this.router.navigate(['/races']);
  }

  onEdit(): void {
    if (!this.race) return;
    this.router.navigate(['/admin/races', this.race.raceId, 'edit']);
  }

  onRegister(): void {
    if (!this.race || !this.isOpen || this.registering) return;

    this.registering = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.racesService.registerToRace(this.race.raceId).subscribe({
      next: () => {
        this.registering = false;
        this.successMessage = 'Yarış kaydın başarıyla alındı! 🎉';
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Race register error:', err);
        this.registering = false;
        this.errorMessage =
          err?.error?.message ||
          err?.error ||
          'Yarışa kayıt olurken bir hata oluştu.';
        this.cdr.detectChanges();
      },
    });
  }
}
