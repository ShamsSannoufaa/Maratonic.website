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
      name: 'January 2025',
      races: [
        { day: '12', name: 'Adana Liberation Run', distance: '10K / 21K', city: 'Adana' },
        { day: '26', name: 'Mersin Trail Run', distance: '12K / 25K', city: 'Mersin' },
        { day: '31', name: 'Winter City Run', distance: '5K / 10K', city: 'Ankara' }
      ]
    },
    {
      name: 'February 2025',
      races: [
        { day: '09', name: 'Izmir Winter Run', distance: '5K / 10K', city: 'Izmir' },
        { day: '16', name: 'Antalya Park Run', distance: '5K / 15K', city: 'Antalya' },
        { day: '23', name: 'Riva Trail Challenge', distance: '7K / 14K', city: 'Istanbul' }
      ]
    },
    {
      name: 'March 2025',
      races: [
        { day: '10', name: 'Runtalya Marathon', distance: '42K / 21K / 10K', city: 'Antalya' },
        { day: '15', name: 'Istanbul Half Marathon', distance: '21K', city: 'Istanbul' },
        { day: '22', name: 'Bursa Spring Run', distance: '10K / 20K', city: 'Bursa' }
      ]
    },
    {
      name: 'April 2025',
      races: [
        { day: '06', name: 'Gaziantep Ultra', distance: '30K / 50K', city: 'Gaziantep' },
        { day: '12', name: 'Ephesus Ancient Run', distance: '5K / 10K', city: 'Izmir' },
        { day: '28', name: 'Uludag Mountain Run', distance: '15K / 25K', city: 'Bursa' }
      ]
    },
    {
      name: 'May 2025',
      races: [
        { day: '05', name: 'Cesme Half Marathon', distance: '21K', city: 'Izmir' },
        { day: '18', name: 'Belgrad Forest Run', distance: '10K / 15K', city: 'Istanbul' },
        { day: '25', name: 'Black Sea Trail', distance: '20K / 35K', city: 'Trabzon' }
      ]
    },
    {
      name: 'June 2025',
      races: [
        { day: '02', name: 'Marmaris Summer Run', distance: '5K / 10K', city: 'Mugla' },
        { day: '15', name: 'Cappadocia Nature Run', distance: '12K / 24K', city: 'Nevsehir' },
        { day: '29', name: 'Iznik Ultra Sprint', distance: '10K', city: 'Bursa' }
      ]
    },
    {
      name: 'July 2025',
      races: [
        { day: '07', name: 'Fethiye Coastal Run', distance: '5K / 10K', city: 'Mugla' },
        { day: '20', name: 'Uludag Trail Classic', distance: '15K / 30K', city: 'Bursa' }
      ]
    },
    {
      name: 'August 2025',
      races: [
        { day: '03', name: 'Erciyes Sky Run', distance: '20K / 40K', city: 'Kayseri' },
        { day: '17', name: 'Aegean Sunset Run', distance: '5K / 12K', city: 'Izmir' },
        { day: '31', name: 'Istanbul Summer Night Run', distance: '10K', city: 'Istanbul' }
      ]
    },
    {
      name: 'September 2025',
      races: [
        { day: '08', name: 'Bodrum Global Run', distance: '10K / 21K', city: 'Bodrum' },
        { day: '20', name: 'Geyik Autumn Run', distance: '14K / 28K', city: 'Istanbul' },
        { day: '28', name: 'Ankara Autumn Half Marathon', distance: '21K', city: 'Ankara' }
      ]
    },
    {
      name: 'October 2025',
      races: [
        { day: '05', name: 'Kapadokya Ultra Trail', distance: '38K / 63K / 119K', city: 'Nevsehir' },
        { day: '13', name: 'Izmir Autumn Run', distance: '10K', city: 'Izmir' },
        { day: '26', name: 'Runatolia Night Run', distance: '10K', city: 'Antalya' }
      ]
    },
    {
      name: 'November 2025',
      races: [
        { day: '02', name: 'Istanbul Marathon', distance: '42K / 15K / 10K', city: 'Istanbul' },
        { day: '16', name: 'Mersin City Run', distance: '10K / 21K', city: 'Mersin' },
        { day: '30', name: 'Uludag Snow Trail', distance: '12K', city: 'Bursa' }
      ]
    },
    {
      name: 'December 2025',
      races: [
        { day: '07', name: 'Winter Forest Run', distance: '10K', city: 'Bolu' },
        { day: '14', name: 'Istanbul New Year Run', distance: '5K / 10K', city: 'Istanbul' },
        { day: '28', name: 'Antalya Winter Marathon', distance: '42K / 21K', city: 'Antalya' }
      ]
    }
  ];

}
