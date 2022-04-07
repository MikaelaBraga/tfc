import { NextFunction, Request, Response, Router } from 'express';
import validateLoginJoi from '../middlewares/validateLoginJoi';
import { ILogin } from '../interfaces/ILogin';
import login from '../services/loginService';

const routeLogin = Router();

routeLogin.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as ILogin;
    validateLoginJoi({ email, password });
    const user = await login(email);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

export default routeLogin;
