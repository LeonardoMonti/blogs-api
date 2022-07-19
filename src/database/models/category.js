module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });
};