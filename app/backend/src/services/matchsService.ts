import errorConstructor from '../utils/errorConstructor';
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

const createMatchs = async (match: IMatchs): Promise<IMatchs> => {
  const matchCreate = await Matchs.create(match);
  const { homeTeam, awayTeam } = match;

  const homeTeamClubs = await Clubs.findByPk(homeTeam);
  const awayTeamClubs = await Clubs.findByPk(awayTeam);

  if (!homeTeamClubs || !awayTeamClubs) {
    throw errorConstructor('unauthorized', 'There is no team with such id!');
  }

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

const updateGoalsMatchs = async (
  id:string,
  homeTeamGoals:number,
  awayTeamGoals:number,
): Promise<IMatchs | null> => {
  await Matchs.update(
    { homeTeamGoals, awayTeamGoals },
    { where: { id } },
  );
  const match = await Matchs.findByPk(id);

  return match;
};

export { listMatchs, getMatchsInProgress, createMatchs, finishMatchs, updateGoalsMatchs };
