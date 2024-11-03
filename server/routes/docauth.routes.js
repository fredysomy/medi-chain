const router = require('express').Router();
const authController = require('../controllers/auth.controllers');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/checkSessionExist', authController.checkSessionExist);

router.get('/openid', passport.authenticate('openidconnect'));

router.get(
  '/callback',
  passport.authenticate('openidconnect', {
    
    failureMessage: true,
  }),
  (req, res, next) => {
    try {
      console.log("Authentication successful.");
      authController.openidcallback(req, res);
    } catch (error) {
      console.error("Error in openidcallback:", error);
      res.redirect('/login');
    }
  }
);





module.exports = router;
