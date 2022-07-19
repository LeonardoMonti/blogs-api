const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required().empty().messages({
      'any.required': '400|"name" is required',
      'string.empty': '400|"name" is empty',
      'string.base': '400|"name" must be a string',
    }),
});
