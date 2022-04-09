import errorConstructor from '../utils/errorConstructor';
import { IMatchs } from '../interfaces/IMatchs';
import Matchs from '../database/models/MatchsModel';
import Clubs from '../database/models/ClubsModel';
import { getClubsById } from './clubsService';

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

const createMatchs = async (match: IMatchs): Promise<IMatchs> => {
  const matchCreate = await Matchs.create(match);
  const { homeTeam, awayTeam } = match;
  await getClubsById(`${homeTeam}`);
  await getClubsById(`${awayTeam}`);

  if (homeTeam === awayTeam) {
    throw errorConstructor(
      'unauthorized',
      'It is not possible to create a match with two equal teams',
    );
  }

  return matchCreate;
};

const finishMatchs = async (id: string): Promise<IMatchs | null> => {
  await Matchs.update({ inProgress: false }, { where: { id } });
  const match = await Matchs.findByPk(id);

  return match;
};

export { listMatchs, getMatchsInProgress, createMatchs, finishMatchs };
