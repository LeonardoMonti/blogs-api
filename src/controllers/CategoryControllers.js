const CategoryServices = require('../services/CategoryServices');

const CategoryControllers = {
  create: async (request, response) => {
    const { name } = request.body;
    
    const { code, message } = await CategoryServices.create(name);

    return response.status(code).json(message);
  },
  getAll: async (_request, response) => {    
    const { code, message } = await CategoryServices.getAll();

    return response.status(code).json(message);
  },
};

module.exports = CategoryControllers;