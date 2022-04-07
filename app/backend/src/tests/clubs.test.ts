// import * as sinon from 'sinon';
import { expect } from 'chai';
// import chaiHttp from 'chai-http';
import Clubs from '../database/models/ClubsModel';

describe('testa camada model de clubes', () => {
  it('verifica se Clubs Model é uma classe', () => {
    const objClub: Clubs = new Clubs();

    expect(objClub).to.be.an('object');
  });

  it('verifica atributos de Clubs Model', () => {
    const objClub: Clubs = new Clubs();

    expect(objClub).to.be.an('object');
    expect(objClub).to.have.property('id');
    expect(objClub).to.have.property('club_name');
  });
});