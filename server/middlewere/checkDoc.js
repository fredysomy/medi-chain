function checkDoctorRole(req, res, next) {
    if (req.session && req.session.role === 'doctor') {
        next();
    } else {
        res.status(403).send('Forbidden: You do not have the required role.');
    }
}

module.exports = checkDoctorRole;