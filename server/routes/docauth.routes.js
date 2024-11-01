const router = require('express').Router();
const authController = require('../controllers/auth.controllers');
const passport = require('passport');
const jwt = require('jsonwebtoken');

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
