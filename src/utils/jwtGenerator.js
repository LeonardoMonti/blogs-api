const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
};

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);
