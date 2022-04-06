import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { IPayloadJwt } from '../interfaces/IPayloadJwt';

const JWT_SECRET = readFileSync('./jwt.evaluation.key', 'utf-8');

export const generateToken = (payload: IPayloadJwt) => sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '1h',
});

export const verifyToken = (token: string): JwtPayload =>
  verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as JwtPayload;
