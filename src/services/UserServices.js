const { User } = require('../database/models');
const jwtGenerator = require('../utils/jwtGenerator');

const UserServices = {
  create: async (displayName, email, password, image) => {
    const userExists = await User.findAll({ where: { email } });

    if (userExists.length !== 0) {
      return { code: 409, message: { message: 'User already registered' } };
    }

    const user = await User.create({ displayName, email, password, image });

    const token = jwtGenerator(user);

    return { code: 201, message: { token } };
  },
  getAll: async () => {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });

    if (allUsers.length === 0) {
      return { code: 401, message: { message: 'Users not found' } };
    }

    return { code: 200, message: allUsers };
  },
  getById: async (id) => {
    const user = await User.findOne({
      where: id,
      attributes: {
        exclude: ['password'],
      } });

    if (!user) {
      return { code: 404, message: { message: 'User does not exist' } };
    }

    return { code: 200, message: user };
  },
};

module.exports = UserServices;