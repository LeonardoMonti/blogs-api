const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().required().empty().email()
    .messages({
      'any.required': '400|Some required fields are missing',
      'string.empty': '400|Some required fields are missing',
    }),
  password: Joi.string().required().empty().min(6)
    .messages({
      'any.required': '400|Some required fields are missing',
      'string.empty': '400|Some required fields are missing',
    }),
});
