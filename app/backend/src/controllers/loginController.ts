import { NextFunction, Request, Response, Router } from 'express';
import authentication from '../middlewares/authentication';
import validateLoginJoi from '../middlewares/validateLoginJoi';
import { ILogin } from '../interfaces/ILogin';
import login from '../services/loginService';

const routeLogin = Router();

routeLogin.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as ILogin;
    validateLoginJoi({ email, password });
    const user = await login(email, password);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

routeLogin.get(
  '/validate',
  authentication,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { role } = req.body;
      return res.status(200).json(role);
    } catch (err) {
      next(err);
    }
  },
);

export default routeLogin;
