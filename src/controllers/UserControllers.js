const UserServices = require('../services/UserServices');

const UserControllers = {
  create: async (request, response) => {
    const { displayName, email, password, image } = request.body;
    
    const { code, message } = await UserServices
      .create(displayName, email, password, image);

    return response.status(code).json(message);
  },
};

module.exports = UserControllers;