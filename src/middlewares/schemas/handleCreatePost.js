const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required().empty().messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',
    'string.base': '400|"title" must be a string',
  }),
  content: Joi.string().required().empty().messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',
    'string.base': '400|"content" must be a string',
  }),
  categoryIds: Joi.array().items(Joi.number()).required().messages({
    'any.required': '400|"categoryIds" is required',
    'array.empty': '400|"categoryIds" is not allowed to be empty',
  }),
});
