function checkUserRole(req, res, next) {
    const user = req.user; // Assuming user information is attached to req object

    if (user && user.role === 'user') {
        next(); // User role is 'user', proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
}

module.exports = checkUserRole;