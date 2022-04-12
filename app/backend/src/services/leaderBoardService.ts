// fazer uma lista com cada time com os valores calculados
// ordenar a lista de leaderboards com a ordem: Pontos, Vitorias, Saldo de gols, Gols a favor

import leaderboardHome from '../utils/homeBoard';

const leaderboard = async () => {
  const leaderb = await leaderboardHome();

  return leaderb;
};

export default leaderboard;
