import { NextFunction, Request, Response, Router } from 'express';
import validateMatchsClubs from '../middlewares/validateMatchClubs';
import authentication from '../middlewares/authentication';
import {
  createMatchs,
  finishMatchs,
  getMatchsInProgress,
  listMatchs,
  updateGoalsMatchs,
} from '../services/matchsService';

const routeMatchs = Router();

routeMatchs.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { inProgress } = req.query;
    const matchs = await listMatchs();

    if (inProgress === 'true') {
      const matchTrue = await getMatchsInProgress('true');
      return res.status(200).json(matchTrue);
    }
    if (inProgress === 'false') {
      const matchFalse = await getMatchsInProgress('false');
      return res.status(200).json(matchFalse);
    }

    return res.status(200).json(matchs);
  } catch (error) {
    next(error);
  }
});

routeMatchs.post(
  '/',
  authentication,
  validateMatchsClubs,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
      const match = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress };
      const createMatch = await createMatchs(match);

      return res.status(201).json(createMatch);
    } catch (error) {
      next(error);
    }
  },
);

routeMatchs.patch('/:id/finish', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const match = await finishMatchs(id);

    return res.status(200).json(match);
  } catch (error) {
    next(error);
  }
});

routeMatchs.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const match = await updateGoalsMatchs(id, homeTeamGoals, awayTeamGoals);

    return res.status(200).json(match);
  } catch (error) {
    next(error);
  }
});

export default routeMatchs;
