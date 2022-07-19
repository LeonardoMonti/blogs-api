const PostServices = require('../services/PostServices');

const PostControllers = {
  create: async (request, response) => {
    const { id } = request.tokenData;
    
    const { title, content, categoryIds } = request.body;
    
    const { code, message } = await PostServices
      .create({ title, content, categoryIds }, Number(id));

    return response.status(code).json(message);
  },
};

module.exports = PostControllers;