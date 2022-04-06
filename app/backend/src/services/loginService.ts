import *  as bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import Users from '../database/models/UsersModel';
import errorConstructor from '../utils/errorConstructor';
// import { ILogin } from '../interfaces/ILogin';

const login = async (email: string, password: string) => {
  const users = await Users.findOne({ where: { email }, attributes: { exclude: ['password'] } });

  if (!users?.email) {
    throw errorConstructor('unauthorized', 'Incorrect email or password');
  }

  const toke = generateToken({ email });

  return { user: users, token: toke };
};

export default login;
