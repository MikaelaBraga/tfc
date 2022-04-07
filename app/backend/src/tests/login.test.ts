import * as sinon from 'sinon';
import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

describe('teste da rota de /login', () => {
  let chaiHttpResponse: Response;

  describe('/login em caso de sucesso', () => {
    it('retorna status 200', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });

      expect(chaiHttpResponse.status).to.be.equal(200);
    });

    it('retorna um objeto', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });

      expect(chaiHttpResponse.body).to.be.an('object');
    });

    it('o objeto possui as propriedades "user" e "token"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });

      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.property('user');
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    it('a propriedade "user" é um objeto', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });
      const { user } = chaiHttpResponse.body;

      expect(user).to.be.an('object');
    });

    it('a propriedade "user" possui os atributos: "id", "username", "role" e "email"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });
      const { user } = chaiHttpResponse.body;

      expect(user).to.be.an('object');
      expect(user).to.have.property('id');
      expect(user).to.have.property('username');
      expect(user).to.have.property('role');
      expect(user).to.have.property('email');
    });

    it('a propriedade "token" não é undefined', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });
      const { token } = chaiHttpResponse.body;

      expect(token).not.to.be.undefined;
    });
  });


});