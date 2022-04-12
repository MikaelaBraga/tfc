import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

describe('testa rota leaderboard/home', () => {
  let chaiHttpResponse: Response;
  it('retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('retorna um array', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.body).to.be.an('array');
  });
});

describe('testa rota leaderboard/away', () => {
  let chaiHttpResponse: Response;
  it('retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('retorna um array', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.body).to.be.an('array');
  });
});