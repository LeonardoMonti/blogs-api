module.exports = (sequelize, DataTypes) => {
  const blogPost =  sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    },
  },
  {
    timestamps: true,
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated'
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignkey: 'userId', as: 'user'
    });
  };

  return blogPost;
};