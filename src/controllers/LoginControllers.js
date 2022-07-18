const LoginServices = require('../services/LoginServices');

const LoginControllers = {
  login: async (request, response) => {
    const { email, password } = request.body;
    
    const { code, message } = await LoginServices.login(email, password);

    return response.status(code).json(message);
  },
};

module.exports = LoginControllers;