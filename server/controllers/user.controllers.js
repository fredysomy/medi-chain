const User = require("../models/users");
const db = require("../config/mysqlorm.config");
const Access = require("../models/doctoraccess");
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






exports.getAccessRequests = async (req, res) => {
  const user_id = req.user.user.uuid;
  const accessRequests = await db.sequelize.query(
    `SELECT * FROM doctoraccess WHERE user_id = '${user_id}' AND has_access = false`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  res.json(accessRequests);
}


exports.giveAccess = async (req, res) => {
  const {acc_id} = req.body;
  const access = await Access(db.sequelize).update({
    has_access: true,
    status: "granted",
  },{
    where: {
      acc_id,
    },
  });
  if(access) {
    return res.json({message:"Access granted"})
  }
}



exports.revokeAccess = async (req, res) => {
  const {acc_id} = req.body;
  const access = await Access(db.sequelize).update({
    has_access: false,
    status: "revoked",
  },{
    where: {
      acc_id,
    },
  });
  if(access) {
    return res.json({message:"Access revoked"})
  }
}


exports.getAccessInfo = async (req,res) => {
  const user_id = req.user.user.uuid;
  const accessRequests = await db.sequelize.query(
    `SELECT * FROM doctoraccess WHERE user_id = '${user_id}' ;`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  res.json(accessRequests);
}
