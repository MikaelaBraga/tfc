import Joi = require('joi');
import { ILogin } from '../interfaces/ILogin';

const loginSchema = Joi.object({
  email: Joi.string().min(5).required().messages({
    // eslint-disable-next-line sonarjs/no-duplicate-string
    'any.required': 'All fields must be filled',
    'string.empty': 'All fields must be filled',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'All fields must be filled',
    'string.min': 'Incorrect email or password',
    'string.empty': 'All fields must be filled',
    'string.base': 'Incorrect email or password', // refatorar
  }),
});

export default (object: ILogin) => {
  const { error } = loginSchema.validate(object);

  if (error) throw error;
};
