import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [CommonModule, NgFor]
})
export class CalendarComponent {

  months = [
    {
      name: 'Ocak 2025',
      races: [
        { day: '12', name: 'Adana Kurtuluş Yarışı', distance: '10K / 21K', city: 'Adana' },
        { day: '26', name: 'Mersin Trail Run', distance: '12K / 25K', city: 'Mersin' }
      ]
    },
    {
      name: 'Şubat 2025',
      races: [
        { day: '09', name: 'İzmir Kış Koşusu', distance: '5K / 10K', city: 'İzmir' },
        { day: '23', name: 'Riva Patika Koşusu', distance: '7K / 14K', city: 'İstanbul' }
      ]
    },
    {
      name: 'Mart 2025',
      races: [
        { day: '10', name: 'Runtalya Maratonu', distance: '42K / 21K / 10K', city: 'Antalya' },
        { day: '15', name: 'İstanbul Yarı Maratonu', distance: '21K', city: 'İstanbul' }
      ]
    }
  ];

}
