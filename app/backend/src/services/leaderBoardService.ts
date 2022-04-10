// pegou os dados da partida
// filtrou pelas partidas finalizadas -> inProgress: false
// verificou que todos os dados vem da tabela de matchs e clubs

// faz os calculos para cada time:

// somou pontos
// somou todos os jogos
// somou as vitorias
// somou os empates
// somou as derrotas
// somou os marcados pelo time
// somou os gols sofridos pelo time
// faz o calculo de saldo de gols
// faz o calculo de aproveitamento do time

// fazer uma lista com cada tima com os valores calculados
// ordenar a lista de leaderboards com a ordem: Pontos, Vitorias, Saldo de gols, Gols a favor

// import Clubs from '../database/models/ClubsModel';
// import Matchs from '../database/models/MatchsModel';

// const leaderboard = async () => {
//   const leaderboardTeams = await Clubs.findAll(
//     { include: { model: Matchs, as: 'homeTeam',
//       where: { inProgress: false } } });

// };
