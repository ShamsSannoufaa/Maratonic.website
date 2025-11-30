import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextRaceDate = new Date("2025-12-31T09:00:00"); // backend'den de çekilebilir
  countdownText = "";

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.nextRaceDate.getTime() - now;

    if (distance < 0) {
      this.countdownText = "Race Day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    this.countdownText = `${days} Days • ${hours} Hours • ${mins} Minutes`;
  }

}
