import { Request, Response, NextFunction } from 'express';
import errorConstructor from '../utils/errorConstructor';
import { verifyToken } from '../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw errorConstructor('unauthorized', 'Token not found');

  try {
    const { role } = verifyToken(token);
    req.body.role = role;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
