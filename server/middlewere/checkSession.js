function checkSession(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).send('Unauthorized: No session available');
    }
}

module.exports = checkSession;