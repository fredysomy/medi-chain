const router = require('express').Router();
const authController = require('../controllers/auth.controllers');
const passport = require('passport');
const jwt = require('jsonwebtoken');
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.register);
router.get('/checkSessionExist', authController.checkSessionExist);

router.get('/openid', passport.authenticate('openidconnect'));

router.get(
  '/callback',
  passport.authenticate('openidconnect', {
    successRedirect: 'https://meetf.blackswitch.in/meet/dashboard',
    failureRedirect: 'https://meetf.blackswitch.in/',
  }),
  authController.openidcallback
);



module.exports = router;
