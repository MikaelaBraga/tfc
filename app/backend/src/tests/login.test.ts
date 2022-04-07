import * as sinon from 'sinon';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import Users from '../database/models/UsersModel';

describe('testa camada model de usuário', () => {
  it('verifica se Users Model é uma classe', () => {
    const objUser: Users = new Users();
    expect(objUser).to.be.an('object');
  });

  it('verifica atributos de Users Model', () => {});
});