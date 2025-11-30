export interface RaceDetailModel {
  raceId: number;
  bannerImage: string;
  distance: string;
  elevationGain: string;
  routeMapUrl: string;
  categories: { name: string; fee: number; capacity: number }[];
  rules: string[];
}
