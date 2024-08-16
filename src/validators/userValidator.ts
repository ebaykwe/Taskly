import Joi from 'joi';

export const updateUserSchema = Joi.object({
  email: Joi.string().email(),
  username: Joi.string(),
  organization: Joi.string(),
  role: Joi.string().valid('admin', 'user', 'moderator'), 
});

export const inviteUserSchema = Joi.object({
  email: Joi.string().email().required(),
});
