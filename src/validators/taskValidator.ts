import Joi from 'joi';

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string().valid('todo', 'in_progress', 'done').required(),
  priority: Joi.string().valid('low', 'medium', 'high').required(),
  labels: Joi.array().items(Joi.string()).optional(),
  startDate: Joi.date().optional(),
  dueDate: Joi.date().optional(),
  board: Joi.string().required(), 
  owner: Joi.string().required(),
  assignee: Joi.string().optional(),
  comments: Joi.array().items(Joi.string()).optional(),
  attachments: Joi.array().items(Joi.string().uri()).optional(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  status: Joi.string().valid('todo', 'in_progress', 'done').optional(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
  labels: Joi.array().items(Joi.string()).optional(),
  startDate: Joi.date().optional(),
  dueDate: Joi.date().optional(),
  board: Joi.string().optional(),
  owner: Joi.string().optional(),
  assignee: Joi.string().optional(),
  comments: Joi.array().items(Joi.string()).optional(),
  attachments: Joi.array().items(Joi.string().uri()).optional(),
});
