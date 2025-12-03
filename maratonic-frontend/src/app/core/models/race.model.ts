export interface RaceModel {
  raceId: number;
  name: string;
  date: string;
  location: string;
  description: string;
  registrationFee: number;
  banner?: string;     // <-- Burası opsiyonel olmalı
  distance?: string;
  status: number | string;       // "Open" / "Closed"
}
