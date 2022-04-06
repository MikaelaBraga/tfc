import { Request, Response, NextFunction } from 'express';
import { IDomainErrorMap } from '../../interfaces/IDomainErrorMap';

const errorMap: IDomainErrorMap = {
  unauthorized: 401,
  notFound: 404,
};

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err.message) return next();

  return res.status(errorMap[err.name]).json({ message: err.message });
};
