const bcrypt = require('bcrypt');
const db = require('../config/mysqlorm.config');

const checkCredentials = async (email, password) => {
  try {
    const user = await users(db.sequelize).findOne({ where: { email: email } });
    console.log(user);

    if (!user) {
      return false;
    }

    const isValid = await bcrypt.compare(password, user.pass);

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