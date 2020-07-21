import Joi from '@hapi/joi';

export default {
  typeCreate: Joi.object().keys({
    name: Joi.string().required(),
  }),
};
