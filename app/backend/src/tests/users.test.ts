// import * as sinon from 'sinon';
import { expect } from 'chai';
// import chaiHttp from 'chai-http';
import Users from '../database/models/UsersModel';

describe('testa camada model de usuário', () => {
  it('verifica se Users Model é uma classe', () => {
    const objUser: Users = new Users();

    expect(objUser).to.be.an('object');
  });

  it('verifica atributos de Users Model', () => {
    const objUser: Users = new Users();

    expect(objUser).to.be.an('object');
    expect(objUser).to.have.property('id');
    expect(objUser).to.have.property('username');
    expect(objUser).to.have.property('role');
    expect(objUser).to.have.property('email');
    expect(objUser).to.have.property('password');
  });
});