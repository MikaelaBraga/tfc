import { NextFunction, Request, Response } from 'express';
import Joi = require('joi');

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!Joi.isError(err)) return next(err);

  return res.status(401).json({ message: err.message });
};
