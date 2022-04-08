import { NextFunction, Request, Response, Router } from 'express';
import { getClubsById, listClubs } from '../services/clubsService';

const routeClubs = Router();

routeClubs.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clubs = await listClubs();

    return res.status(200).json(clubs);
  } catch (error) {
    next(error);
  }
});

routeClubs.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const club = await getClubsById(id);

    return res.status(200).json(club);
  } catch (error) {
    next(error);
  }
});

export default routeClubs;
