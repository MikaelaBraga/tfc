export interface IClubHome {
  id: number,
  clubName: string;
  homeTeam: {
    id: number;
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: number;
  }[]
}
