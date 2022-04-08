import { NextFunction, Request, Response, Router } from 'express';
import { getMatchsInProgress, listMatchs } from '../services/matchsService';

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

export default routeMatchs;
