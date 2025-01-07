const jwt = require('jsonwebtoken');

function middleware(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'jwtsecret'); // Replace 'jwtsecret' with your actual secret key
    req.user = decoded.user;  // Assuming the user data is stored under 'user' in the token payload
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).send({ error: 'Invalid or expired token' });
  }
}

module.exports = middleware;
