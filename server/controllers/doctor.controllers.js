const User = require("../models/users");
exports.getUserById = async (req, res) => {
  console.log(req);
  const { id } = req.query;
  const user = await User(db.sequelize).findOne({ where: { uuid: id } });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { password,seckey, ...rest } = user.dataValues;
  return res.status(200).json({ rest });
};
