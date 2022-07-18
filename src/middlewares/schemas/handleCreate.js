const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().required().empty().min(8)
    .messages({
      'any.required': '400|"displayName" is required',
      'string.empty': '400|"displayName" is empty',
      'string.min': '400|"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().required().empty().email()
    .messages({
      'any.required': '400|"email" is required',
      'string.empty': '400|"email" is empty',
      'string.email': '400|"email" must be a valid email',
    }),
  password: Joi.string().required().empty().min(6)
    .messages({
      'any.required': '400|"password" is required',
      'string.empty': '400|"password" is empty',
      'string.min': '400|"password" length must be at least 6 characters long',
    }),
  image: Joi.string().messages({
      'string.base': '400|"image" must be a string',
    }),
});
