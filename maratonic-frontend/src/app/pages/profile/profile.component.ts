import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule]
})
export class ProfileComponent {

  user = {
    name: "Sueda Ünal",
    email: "suedaunal@example.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    country: "Türkiye",
    city: "İstanbul",
    club: "Maratonic Running Team",
    category: "Age 18–29 (Women)",
    pace: "5:45 / km",
    birthday: "02 April 2004",
    phone: "+90 535 000 0000",
    startYear: 2021
  };

  bio = {
    totalRaces: 14,
    bestRace: "Runtalya 10K – 54:12",
    longestRace: "İstanbul Yarı Maratonu – 21.1 km",
    yearlyMileage: "624 km",
    runningStyle: "Endurance Runner",
    favoriteSurface: "Road",
  };

  stats = [
    { number: 14, title: "Tamamlanan Yarış", start: "2021", end: "2025", color: "#027361" },
    { number: "624 km", title: "Yıllık Koşu Mesafesi", start: "2025", end: "Hedef: 800 km", color: "#065667" },
    { number: "54:12", title: "En İyi 10K Zamanı", start: "Runtalya", end: "2024", color: "#26A08C" },
    { number: "2:01:45", title: "En İyi Yarı Maraton", start: "İstanbul Yarı", end: "2024", color: "#F7A400" }
  ];

}
