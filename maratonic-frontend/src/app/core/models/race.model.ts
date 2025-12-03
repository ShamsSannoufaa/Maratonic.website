export interface RaceModel {
  raceId: number;
  name: string;
  date: string;
  location: string;
  description: string;
  registrationFee: number;

  banner?: string;
  distance?: string;

  difficultyLevel?: string;   // Easy / Medium / Hard
  surfaceType?: string;        // Road / Trail / Mixed
  elevationGain?: number;      // metre

  status: number | string;     // Open / Closed / Upcoming / Finished
}
