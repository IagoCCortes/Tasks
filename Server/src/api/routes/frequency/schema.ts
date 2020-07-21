import Joi from '@hapi/joi';

export default {
  frequencyCreate: Joi.object().keys({
    name: Joi.string().required(),
  }),
};
