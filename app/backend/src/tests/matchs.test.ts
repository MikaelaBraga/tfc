import * as chai from 'chai';
import { expect } from 'chai';
import Matchs from '../database/models/MatchsModel';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

describe('testa camada model de matchs', () => {
  it('verifica se Matchs Model é uma classe', () => {
    const objMatch: Matchs = new Matchs();

    expect(objMatch).to.be.an('object');
  });

  it('verifica atributos de Matchs Model', () => {
    const objMatch: Matchs = new Matchs();

    expect(objMatch).to.be.an('object');
    expect(objMatch).to.have.property('id');
    expect(objMatch).to.have.property('homeTeam');
    expect(objMatch).to.have.property('homeTeamGoals');
    expect(objMatch).to.have.property('awayTeam');
    expect(objMatch).to.have.property('awayTeamGoals');
    expect(objMatch).to.have.property('inProgress');
  });
});

describe('', () => {
  let chaiHttpResponse: Response;
  it('retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/matchs');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('retorna um array listando as partidas', async () => {
    chaiHttpResponse = await chai.request(app).get('/matchs');

    expect(chaiHttpResponse.body).to.be.an('array');
  });

  it('a partida possui as propriedades "id", "homeTeam", "homeTeamGoals", "awayTeam", "awayTeamGoals", "inProgress", "homeClub" e "awayClub"', async () => {
    chaiHttpResponse = await chai.request(app).get('/matchs');

    expect(chaiHttpResponse.body[0]).to.have.property('id');
    expect(chaiHttpResponse.body[0]).to.have.property('homeTeam');
    expect(chaiHttpResponse.body[0]).to.have.property('homeTeamGoals');
    expect(chaiHttpResponse.body[0]).to.have.property('awayTeam');
    expect(chaiHttpResponse.body[0]).to.have.property('awayTeamGoals');
    expect(chaiHttpResponse.body[0]).to.have.property('inProgress');
    expect(chaiHttpResponse.body[0]).to.have.property('homeClub');
    expect(chaiHttpResponse.body[0]).to.have.property('awayClub');
  });
});