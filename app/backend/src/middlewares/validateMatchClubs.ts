import { NextFunction, Request, Response } from 'express';
import { getClubsById } from '../services/clubsService';

const validateMatchsClubs = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const homeTeamClubs = await getClubsById(homeTeam);
  const awayTeamClubs = await getClubsById(awayTeam);

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams' });
  }

  if (!homeTeamClubs || !awayTeamClubs) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  next();
};

export default validateMatchsClubs;
