import { IMatchs } from '../interfaces/IMatchs';
import Matchs from '../database/models/MatchsModel';
import Clubs from '../database/models/ClubsModel';

const listMatchs = async (): Promise<IMatchs[]> => {
  const matchs = await Matchs.findAll({ include:
    [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }] });

  return matchs;
};

const getMatchInProgressTrue = async (): Promise<IMatchs[]> => {
  const matchs = await Matchs.findAll({
    where: { inProgress: true },
    include: [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }] });

  return matchs;
};

export { listMatchs, getMatchInProgressTrue };
