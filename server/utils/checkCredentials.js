const bcrypt = require('bcrypt');
const db = require('../config/mysqlorm.config');
const User = require('../models/users');
const checkCredentials = async (email, password) => {
  try {
    const user = await User(db.sequelize).findOne({ where: { email: email } });
    console.log(user);

    if (!user) {
      return false;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return false;
    }

    return user;
  } catch (error) {
    console.error('Error checking credentials:', error);
    return false;
  }
};

module.exports = checkCredentials;