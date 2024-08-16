import Joi from 'joi';

export const createBoardSchema = Joi.object({
  name: Joi.string().required(),
  organization: Joi.string().required(),
  description: Joi.string().optional(),
});

export const updateBoardSchema = Joi.object({
  name: Joi.string().optional(),
  organization: Joi.string().optional(),
  description: Joi.string().optional(),
});
