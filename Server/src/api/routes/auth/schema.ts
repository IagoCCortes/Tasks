import Joi from '@hapi/joi';

export default {
  authSignUp: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
  authSignIn: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};
