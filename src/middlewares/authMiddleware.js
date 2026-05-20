const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user data to request object
        next();
    } catch (error) {
        logger.error('Invalid token:', error);
        res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;