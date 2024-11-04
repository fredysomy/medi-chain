const User = require("../models/users");
const db = require("../config/mysqlorm.config");

exports.getSelf = async (req, res) => {
  const { password, seckey, ...rest } = req.user.user;
  res.json(rest);
};

exports.editInfo = async (req, res) => {
  try {
    const { password, seckey, ...updateData } = req.body;
    const updatedUser = User(db.sequelize).update(updateData, {
      where: { uuid: req.user.user.uuid },
      returning: true,
    });
    res
      .status(200)
      .json({ status: "User information updated successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "An error occurred while updating user information.",
        success: false,
      });
  }
};
