import { IMatchs } from '../interfaces/IMatchs';
import Matchs from '../database/models/MatchsModel';
import Clubs from '../database/models/ClubsModel';

const listMatchs = async (): Promise<IMatchs[]> => {
  const matchs = await Matchs.findAll({ include:
    [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }] });

  return matchs;
};

const getMatchsInProgress = async (inProgress: string): Promise<IMatchs[]> => {
  const matchs = await Matchs.findAll({
    where: { inProgress: JSON.parse(inProgress) },
    include: [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }] });

  return matchs;
};

const createMatchs = async (match: object): Promise<IMatchs> => {
  const create = await Matchs.create(match);

  return create;
};

export { listMatchs, getMatchsInProgress, createMatchs };
