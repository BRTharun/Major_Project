// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');

    if (decoded.user) {
      // For regular users
      req.user = decoded.user;
    } else if (decoded.dietitian) {
      // For dietitians
      req.userId = decoded.dietitian.id;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};
