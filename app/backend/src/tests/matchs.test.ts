// import * as sinon from 'sinon';
import { expect } from 'chai';
// import chaiHttp from 'chai-http';
import Matchs from '../database/models/MatchsModel';

describe('testa camada model de usuário', () => {
  it('verifica se Matchs Model é uma classe', () => {
    const objMatch: Matchs = new Matchs();

    expect(objMatch).to.be.an('object');
  });

  it('verifica atributos de Matchs Model', () => {
    const objMatch: Matchs = new Matchs();

    expect(objMatch).to.be.an('object');
    expect(objMatch).to.have.property('id');
    expect(objMatch).to.have.property('home_team');
    expect(objMatch).to.have.property('home_team_goals');
    expect(objMatch).to.have.property('away_team');
    expect(objMatch).to.have.property('away_team_goals');
    expect(objMatch).to.have.property('in_progress');
  });
});