const { Category, BlogPost, PostCategory } = require('../database/models');

const PostServices = {
  create: async ({ title, content, categoryIds }, id) => {
    const allCategories = await Category.findAll();
    
    const allCategoriesId = allCategories.map((category) => category.id);

    const isMatch = categoryIds.every((category) => allCategoriesId.includes(category));

    if (!isMatch) return { code: 400, message: { message: '"categoryIds" not found' } };

    const post = await BlogPost.create({ title, content, userId: id });

    await Promise.all(categoryIds.map((categoryId) => PostCategory
      .create({ postId: post.id, categoryId })));

    return { code: 201, message: post };
  },
};

module.exports = PostServices;