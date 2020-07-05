import Joi from '@hapi/joi';
import { JoiObjectId } from '../../helpers/validator';

export default {
  routineCreate: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    frequency: JoiObjectId().required(),
    types: Joi.array().items(JoiObjectId()).required(),
    expectedValue: Joi.string().optional(),
  }),
  routineUpdate: Joi.object().keys({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    active: Joi.bool().optional(),
    frequency: JoiObjectId().optional(),
    types: Joi.array().items(JoiObjectId()).optional(),
    expectedValue: Joi.string().optional(),
    achievedValue: Joi.string().optional(),
  }),
  routineList: Joi.object().keys({
    frequency: JoiObjectId().optional(),
    types: Joi.array().items(JoiObjectId()).optional(),
    active: Joi.bool().optional(),
    limit: Joi.number().optional().min(10).max(50).default(10),
    page: Joi.number().optional().min(1).default(1),
    sort: Joi.string().optional().default('createdAt:asc'),
  }),
  routineId: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
