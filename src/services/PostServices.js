const { Category, BlogPost, PostCategory, User } = require('../database/models');

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
  getAll: async () => {
    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  
    return { code: 200, message: allPosts };
  },
};

module.exports = PostServices;