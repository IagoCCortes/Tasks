import Joi from '@hapi/joi';
import { JoiObjectId } from '../../helpers/validator';

export default {
  taskCreate: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    expectedValue: Joi.number().optional(),
    expectedTime: Joi.number().optional(),
    dueDate: Joi.date().optional(),
    frequency: JoiObjectId().optional(),
    types: Joi.array().items(JoiObjectId()).optional(),
  }),
  taskUpdate: Joi.object().keys({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    expectedValue: Joi.string().optional(),
    achievedValue: Joi.string().optional(),
    dueDate: Joi.date().optional(),
    completedDate: Joi.date().optional(),
    types: Joi.array().items(JoiObjectId()).optional(),
  }),
  taskList: Joi.object().keys({
    completed: Joi.boolean().optional(),
    types: Joi.array().items(JoiObjectId()).optional(),
    limit: Joi.number().optional().min(10).max(50).default(10),
    page: Joi.number().optional().min(1).default(1),
    sort: Joi.string().optional().default('createdAt:asc'),
  }),
  taskId: Joi.object().keys({
    id: JoiObjectId().required(),
  }),
};
