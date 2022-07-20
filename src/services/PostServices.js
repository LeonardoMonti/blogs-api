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
  getById: async (id) => {
    const postById = await BlogPost.findOne({
      where: id,
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });

  if (!postById) return { code: 404, message: { message: 'Post does not exist' } };
  
    return { code: 200, message: postById };
  },
  updatePost: async (params, title, content) => {
    const { id, userId } = params;

    const postById = await BlogPost.findOne({ where: id,
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }] });

    if (postById.userId !== userId) {
      return { code: 401, message: { message: 'Unauthorized user' } };
    }

    await BlogPost.update({ title, content }, { where: { id } });
    
    const changeMade = await BlogPost.findOne({ where: id,
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    
    return { code: 200, message: changeMade };
  },
};

module.exports = PostServices;