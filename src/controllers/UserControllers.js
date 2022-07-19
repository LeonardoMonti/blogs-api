const UserServices = require('../services/UserServices');

const UserControllers = {
  create: async (request, response) => {
    const { displayName, email, password, image } = request.body;
    
    const { code, message } = await UserServices
      .create(displayName, email, password, image);

    return response.status(code).json(message);
  },
  getAll: async (_request, response) => {
    const { code, message } = await UserServices.getAll();

    return response.status(code).json(message);
  },
  getById: async (request, response) => {
    const { id } = request.params;

    const { code, message } = await UserServices.getById(Number(id));

    return response.status(code).json(message);
  },
};

module.exports = UserControllers;