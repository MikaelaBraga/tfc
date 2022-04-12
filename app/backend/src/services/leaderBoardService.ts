// fazer uma lista com cada time com os valores calculados
// ordenar a lista de leaderboards com a ordem: Pontos, Vitorias, Saldo de gols, Gols a favor

import leaderboardAway from '../utils/awayBoard';
import leaderboardHome from '../utils/homeBoard';

const homeLeaderboard = async () => {
  const leaderb = await leaderboardHome();

  return leaderb;
};

const awayLeaderboard = async () => {
  const leaderb = await leaderboardAway();

  return leaderb;
};

export { homeLeaderboard, awayLeaderboard };
