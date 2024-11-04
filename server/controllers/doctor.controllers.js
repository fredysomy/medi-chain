const User = require("../models/users");
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User(db.sequelize).findOne({ where: { id: id } });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ user });
};
