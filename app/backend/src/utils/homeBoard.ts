/* eslint-disable max-lines-per-function */

import { ILeaderBoard } from '../interfaces/ILeaderBoard';
import Clubs from '../database/models/ClubsModel';
import Matchs from '../database/models/MatchsModel';
import { IClubHome } from '../interfaces/IClubHome';

const leaderboardHome = async (): Promise<ILeaderBoard[]> => {
// pegou os dados da partida
// filtrou pelas partidas finalizadas -> inProgress: false
// verificou que todos os dados vem da tabela de matchs e clubs
  const leaderboardTeams = await Clubs.findAll(
    {
      include: [{
        model: Matchs,
        as: 'homeTeam',
        where: { inProgress: false },
      }],
    },
  ) as unknown as IClubHome[];// retorno ok [array de time e suas partidas]

  // faz os calculos para cada time:

  const list = leaderboardTeams.map((team) => {
    let totalPoints = 0;
    let totalGames = 0;
    let totalVictories = 0;
    let totalDraws = 0;
    let totalLosses = 0;
    let goalsFavor = 0;
    let goalsOwn = 0;
    let goalsBalance = 0;

    team.homeTeam.forEach((t) => {
      if (t.homeTeamGoals > t.awayTeamGoals) { totalVictories += 1; } // somou as vitorias
      if (t.homeTeamGoals === t.awayTeamGoals) { totalDraws += 1; } // somou os empates
      if (t.homeTeamGoals < t.awayTeamGoals) { totalLosses += 1; } // somou as derrotas
      if (t.homeTeamGoals > t.awayTeamGoals) { totalPoints += 3; } // somou os pontos por vitorias
      if (t.homeTeamGoals === t.awayTeamGoals) { totalPoints += 1; } // somou pontos por empate
      totalGames += 1; // somou todos os jogos
      goalsFavor += t.homeTeamGoals; // somou os gols marcados pelo time
      goalsOwn += t.awayTeamGoals; // somou os gols sofridos pelo time
    });

    goalsBalance = goalsFavor - goalsOwn; // calculo de saldo de gols
    const efficiency = parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2)); // calculo de aproveitamento do time

    return {
      name: team.clubName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  });

  return list.sort((a, b) =>
    b.totalPoints - a.totalPoints
   || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);
};

export default leaderboardHome;
