export interface ProfileModel {
  userId: number;
  name: string;
  email: string;
  registeredRaces: {
    raceId: number;
    name: string;
    date: string;
    status: string;
  }[];
  pastRaces: {
    raceId: number;
    name: string;
    date: string;
    finishTime: string;
  }[];
}
