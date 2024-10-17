const passport = require('passport');
const checkCredentials = require('../utils/checkCredentials');

const login = (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.logIn(user, async (err) => {
      if (err) {
        console.error('Session login error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Save user details in session
      req.session.userid = user.id;
      req.session.email = user.email;
      req.session.role = user.role;
      // Save the session data
      req.session.save((err) => {
        if (err) {
          console.error('Session save error:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(200).json({ message: 'Login successful' });
      });
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error('Session destroy error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      return res.status(200).json({ message: 'Logout successful' });
    });
  });
};

const checkSessionExist = (req, res) => {
  console.log('Checking session');
  console.log(req.session.passport)
  if (req.session.passport?.user && ( req.session.passport?.user.username || req.session.passport?.user.email)) {
    res.status(200).json({ message: 'Session exists' });
  } else {
    res.status(401).json({ message: 'Session does not exist' });
  }
};

const openidcallback = async (req, res) => {
  const data = jwt.decode(req.authInfo);

  req.session.userid = req.user.id;
  req.session.email ="asdasdasdasd";
  req.session.role = 'user';
  console.log(data)

  // Save the session data
  req.session.save((err) => {
    if (err) {
      console.error('Session save error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    return res.status(302).redirect('https://meetf.blackswitch.in/meet/dashboard');
  });
};
module.exports = {
  login,
  logout,
  checkSessionExist,
  openidcallback,
};