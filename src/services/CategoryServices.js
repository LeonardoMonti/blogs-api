const { Category } = require('../database/models');

const CategoryServices = {
  create: async (name) => {
    const category = await Category.create({ name });

    return { code: 201, message: category };
  },
  getAll: async () => {
    const category = await Category.findAll();

    return { code: 200, message: category };
  },
};

module.exports = CategoryServices;