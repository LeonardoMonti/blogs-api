const { Category } = require('../database/models');

const CategoryServices = {
  create: async (name) => {
    const category = await Category.create({ name });

    return { code: 201, message: category };
  },
};

module.exports = CategoryServices;