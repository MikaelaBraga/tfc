export interface IClubAway {
  id: number,
  clubName: string;
  awayTeam: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: number;
  }[]
}
