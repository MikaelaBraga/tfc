import { NextFunction, Request, Response, Router } from 'express';
import { homeLeaderboard, awayLeaderboard } from '../services/leaderBoardService';

const routeLeaderboard = Router();

routeLeaderboard.get('/home', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderb = await homeLeaderboard();

    return res.status(200).json(leaderb);
  } catch (error) {
    next(error);
  }
});

routeLeaderboard.get('/away', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderb = await awayLeaderboard();

    return res.status(200).json(leaderb);
  } catch (error) {
    next(error);
  }
});

export default routeLeaderboard;
