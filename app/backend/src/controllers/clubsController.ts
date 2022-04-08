import { NextFunction, Request, Response, Router } from 'express';
import { listClubs } from '../services/clubsService';

const routeClubs = Router();

routeClubs.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clubs = await listClubs();

    return res.status(200).json(clubs);
  } catch (error) {
    next(error);
  }
});

export default routeClubs;
