// import * as sinon from 'sinon';
import { expect } from 'chai';
// import chaiHttp from 'chai-http';
import Matchs from '../database/models/MatchsModel';

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