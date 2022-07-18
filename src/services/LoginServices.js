const { User } = require('../database/models');
const jwtGenerator = require('../utils/jwtGenerator');

const LoginServices = {
  login: async (email, password) => {
    const user = await User.findAll({ where: { email } });

    if (user.length !== 0) {
      const { dataValues } = user[0];

      const isValid = dataValues.email === email && dataValues.password === password;
      
      if (isValid) {
        const token = jwtGenerator({ id: dataValues.id, email });

        return { code: 200, message: { token } };
      }
    }

    return { code: 400, message: { message: 'Invalid fields' } };
  },
};

module.exports = LoginServices;