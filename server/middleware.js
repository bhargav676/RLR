const jwt = require('jsonwebtoken');

function middleware(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'jwtsecret'); 
    req.user = decoded.user;  
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).send({ error: 'Invalid or expired token' });
  }
}

module.exports = middleware;