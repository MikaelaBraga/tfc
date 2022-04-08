import { NextFunction, Request, Response, Router } from 'express';
import { listMatchs } from '../services/matchsService';

const routeMatchs = Router();

routeMatchs.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const matchs = await listMatchs();

    return res.status(200).json(matchs);
  } catch (error) {
    next(error);
  }
});

export default routeMatchs;
