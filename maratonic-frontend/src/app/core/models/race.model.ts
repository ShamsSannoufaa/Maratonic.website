export interface RaceModel {
  raceId: number;
  name: string;
  date: string;
  location: string;
  description: string;
  registrationFee: number;
  banner: string;
  distance: string;
  status: string;   // “Open / Closed”
}
