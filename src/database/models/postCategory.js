module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPosts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      as: 'posts',
      otherKey: 'categoryId',
      through: 'PostCategory'
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'categories',
      otherKey: 'postId',
      through: 'PostCategory'
    });
  }

  return postCategory;
};