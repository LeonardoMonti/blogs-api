const CategoryServices = require('../services/CategoryServices');

const CategoryControllers = {
  create: async (request, response) => {
    const { name } = request.body;
    
    const { code, message } = await CategoryServices.create(name);

    return response.status(code).json(message);
  },
};

module.exports = CategoryControllers;