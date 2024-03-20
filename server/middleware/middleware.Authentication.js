


const jwt = require('jsonwebtoken');




function verifyToken(req, res, next) {
const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: 'Access denied1' });
try {
 const decoded = jwt.verify(token,'your-secret-key');
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json(decoded);
 }
 };

module.exports = verifyToken;