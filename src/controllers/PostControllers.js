const PostServices = require('../services/PostServices');

const PostControllers = {
  create: async (request, response) => {
    const { id } = request.tokenData;
    
    const { title, content, categoryIds } = request.body;
    
    const { code, message } = await PostServices
      .create({ title, content, categoryIds }, Number(id));

    return response.status(code).json(message);
  },
  getAll: async (_request, response) => {        
    const { code, message } = await PostServices.getAll();

    return response.status(code).json(message);
  },
  getById: async (request, response) => {
    const { id } = request.params;
    
    const { code, message } = await PostServices.getById(Number(id));

    return response.status(code).json(message);
  },
};

module.exports = PostControllers;