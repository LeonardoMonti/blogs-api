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
};

module.exports = UserServices;