import { NextFunction, Request, Response, Router } from 'express';
import leaderboard from '../services/leaderBoardService';

const routeLeaderboard = Router();

routeLeaderboard.get('/home', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderb = await leaderboard();

    return res.status(200).json(leaderb);
  } catch (error) {
    next(error);
  }
});

export default routeLeaderboard;
