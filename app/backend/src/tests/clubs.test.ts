import * as chai from 'chai';
import { expect } from 'chai';
import Clubs from '../database/models/ClubsModel';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

describe('testa camada model de clubes', () => {
  it('verifica se Clubs Model é uma classe', () => {
    const objClub: Clubs = new Clubs();

    expect(objClub).to.be.an('object');
  });

  it('verifica atributos de Clubs Model', () => {
    const objClub: Clubs = new Clubs();

    expect(objClub).to.be.an('object');
    expect(objClub).to.have.property('id');
    expect(objClub).to.have.property('clubName');
  });
});

describe('testa rota /clubs', () => {
  let chaiHttpResponse: Response;
  it('retorna status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('retorna um array listando os clubes', async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs');

    expect(chaiHttpResponse.body).to.be.an('array');
  });

  it('cada clube possui a propriedade "id" e "clubName"', async () => {
    chaiHttpResponse = await chai.request(app).get('/clubs');
    const verifyClubs = chaiHttpResponse.body.every((club: { id: any; clubName: any; }) => club.id && club.clubName);

    expect(verifyClubs).to.be.equal(true);
  });

  describe('testa rota /clubs/:id', () => {
    it('retorna status 200', async () => {
      chaiHttpResponse = await chai.request(app).get('/clubs/1');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
    });

    it('retorna um objeto com um clube', async () => {
      chaiHttpResponse = await chai.request(app).get('/clubs/1');
  
      expect(chaiHttpResponse.body).to.be.an('object');
    });

    it('o objeto possui as proriedades "id" e "clubName"', async () => {
      chaiHttpResponse = await chai.request(app).get('/clubs/1');
  
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('clubName');
    });
  
  });
});