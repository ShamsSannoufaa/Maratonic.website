import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  CommonModule,
  NgFor,
  NgClass,
  DatePipe
} from '@angular/common';

import { RaceModel } from '../../../core/models/race.model';

@Component({
  selector: 'app-races-list',
  standalone: true,
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.css'],
  imports: [
    CommonModule,
    NgFor,
    NgClass,
    DatePipe,
    RouterLink,
  ]
})
export class RacesListComponent {

  races: RaceModel[] = [
    // 1–6 Önceki yarışlar
    {
      raceId: 1,
      name: "Runtalya Maratonu",
      date: "2025-03-10",
      location: "Antalya, Türkiye",
      description: "Türkiye’nin en büyük yol koşularından biri.",
      registrationFee: 350,
      banner: "assets/banners/runtalya.jpg",
      distance: "42K / 21K / 10K",
      status: "Open"
    },
    {
      raceId: 2,
      name: "İstanbul Yarı Maratonu",
      date: "2025-04-28",
      location: "İstanbul, Türkiye",
      description: "Dünyanın en hızlı yarı maraton parkurlarından.",
      registrationFee: 400,
      banner: "assets/banners/istanbul-half.jpg",
      distance: "21K / 10K",
      status: "Open"
    },
    {
      raceId: 3,
      name: "Salomon Ultra Trail Cappadocia",
      date: "2025-10-19",
      location: "Kapadokya, Türkiye",
      description: "Dünyaca ünlü Kapadokya ultra trail yarışı.",
      registrationFee: 900,
      banner: "assets/banners/cappadocia.jpg",
      distance: "119K / 63K / 38K",
      status: "Open"
    },
    {
      raceId: 4,
      name: "İznik Ultra",
      date: "2025-04-20",
      location: "Bursa, Türkiye",
      description: "Türkiye’nin en eski ve en bilinen ultra trail yarışlarından.",
      registrationFee: 750,
      banner: "assets/banners/iznik.jpg",
      distance: "160K / 90K / 55K / 35K",
      status: "Open"
    },
    {
      raceId: 5,
      name: "Berlin Marathon",
      date: "2025-09-28",
      location: "Berlin, Almanya",
      description: "Dünyanın en hızlı maraton parkuru. Major seri üyesi.",
      registrationFee: 1500,
      banner: "assets/banners/berlin.jpg",
      distance: "42K",
      status: "Closed"
    },
    {
      raceId: 6,
      name: "London Marathon",
      date: "2025-04-21",
      location: "Londra, İngiltere",
      description: "World Marathon Major yarışlarından biri.",
      registrationFee: 1700,
      banner: "assets/banners/london.jpg",
      distance: "42K",
      status: "Closed"
    },

    // 🎉 12 Yeni Yarış Buradan Başlıyor

    {
      raceId: 7,
      name: "Ankara Yarı Maratonu",
      date: "2025-08-15",
      location: "Ankara, Türkiye",
      description: "Başkentte düzenlenen hızlı ve düz bir parkur.",
      registrationFee: 350,
      banner: "assets/banners/ankara.jpg",
      distance: "21K / 10K",
      status: "Open"
    },
    {
      raceId: 8,
      name: "Bodrum Global Run",
      date: "2025-05-05",
      location: "Bodrum, Muğla",
      description: "Deniz kenarında sıcak ve eğlenceli bir yarış atmosferi.",
      registrationFee: 300,
      banner: "assets/banners/bodrum.jpg",
      distance: "10K / 5K",
      status: "Open"
    },
    {
      raceId: 9,
      name: "İstanbul Maratonu",
      date: "2025-11-03",
      location: "İstanbul, Türkiye",
      description: "Kıtalararası koşu. Dünyanın en özel maratonlarından.",
      registrationFee: 450,
      banner: "assets/banners/istanbul-marathon.jpg",
      distance: "42K / 15K / 10K",
      status: "Open"
    },
    {
      raceId: 10,
      name: "Barcelona Marathon",
      date: "2025-03-16",
      location: "Barselona, İspanya",
      description: "Avrupa’nın en popüler şehir maratonlarından.",
      registrationFee: 1600,
      banner: "assets/banners/barcelona.jpg",
      distance: "42K",
      status: "Open"
    },
    {
      raceId: 11,
      name: "New York City Marathon",
      date: "2025-11-02",
      location: "New York, ABD",
      description: "Dünyanın en büyük maraton organizasyonu.",
      registrationFee: 2000,
      banner: "assets/banners/nyc.jpg",
      distance: "42K",
      status: "Closed"
    },
    {
      raceId: 12,
      name: "Paris Marathon",
      date: "2025-04-14",
      location: "Paris, Fransa",
      description: "Tarihi şehir parkurunda unutulmaz bir deneyim.",
      registrationFee: 1550,
      banner: "assets/banners/paris.jpg",
      distance: "42K",
      status: "Open"
    },
    {
      raceId: 13,
      name: "Ultra Trail du Mont Blanc (UTMB)",
      date: "2025-08-29",
      location: "Chamonix, Fransa",
      description: "Dünyanın en prestijli ultra trail yarışı.",
      registrationFee: 2500,
      banner: "assets/banners/utmb.jpg",
      distance: "171K",
      status: "Closed"
    },
    {
      raceId: 14,
      name: "Golden Ring Ultra Trail",
      date: "2025-07-20",
      location: "Suzdal, Rusya",
      description: "Avrupa’nın en kalabalık ultra trail etkinliklerinden.",
      registrationFee: 1000,
      banner: "assets/banners/goldenring.jpg",
      distance: "50K / 30K",
      status: "Open"
    },
    {
      raceId: 15,
      name: "Amsterdam Marathon",
      date: "2025-10-19",
      location: "Amsterdam, Hollanda",
      description: "Hızlı ve düz parkuruyla PB (personal best) için ideal.",
      registrationFee: 1200,
      banner: "assets/banners/amsterdam.jpg",
      distance: "42K / 21K",
      status: "Open"
    },
    {
      raceId: 16,
      name: "Warsaw Half Marathon",
      date: "2025-09-14",
      location: "Varşova, Polonya",
      description: "Avrupa’da popüler hale gelen enerjik bir yarış.",
      registrationFee: 800,
      banner: "assets/banners/warsaw.jpg",
      distance: "21K",
      status: "Open"
    },
    {
      raceId: 17,
      name: "Tokyo Marathon",
      date: "2025-03-02",
      location: "Tokyo, Japonya",
      description: "Major serisinin en disiplini ve en düzenli etkinliği.",
      registrationFee: 2100,
      banner: "assets/banners/tokyo.jpg",
      distance: "42K",
      status: "Closed"
    },
    {
      raceId: 18,
      name: "Vienna City Marathon",
      date: "2025-04-06",
      location: "Viyana, Avusturya",
      description: "Avrupa'nın en güzel şehir maratonlarından biri.",
      registrationFee: 1300,
      banner: "assets/banners/vienna.jpg",
      distance: "42K / 21K",
      status: "Open"
    }
  ];

  constructor(private router: Router) {}

  openRace(id: number) {
    this.router.navigate(['/races', id]);
  }
}
