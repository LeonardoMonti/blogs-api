const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    
    req.tokenData = decoded.data;
    req.headers = decoded.data;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
