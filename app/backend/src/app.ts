import * as express from 'express';
import * as cors from 'cors';
import serverError from './middlewares/errors/serverError';
import domainError from './middlewares/errors/domainError';
import joiError from './middlewares/errors/joiError';
import routeLogin from './controllers/loginController';
import routeClubs from './controllers/clubsController';
import routeMatchs from './controllers/matchsController';
import routeLeaderboard from './controllers/leaderBoardController';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errors();
    this.app.use(cors());
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
    this.app.use(express.json());
  }

  private routes() {
    this.app.get('/', (req, res, _next) => {
      res.status(200).json({ message: 'Ok!' });
    });
    this.app.use('/login', routeLogin);
    this.app.use('/clubs', routeClubs);
    this.app.use('/matchs', routeMatchs);
    this.app.use('/leaderboard', routeLeaderboard);
  }

  private errors() {
    this.app.use(joiError);
    this.app.use(domainError);
    this.app.use(serverError);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
