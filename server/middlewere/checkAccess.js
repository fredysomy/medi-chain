const Access =  require("../models/doctoraccess");
const db = require("../config/mysqlorm.config");
const User = require("../models/users");
exports.checkAccess = async (req, res, next) => {
    console.log(req.body);
    const {user_id} =req.query;
    const doc_id = req.user.id;

    const existsAccessRequest = await Access(db.sequelize).findOne({
        where: {
            user_id,
            doc_id,
            has_access: true,
            status: "granted",
        },
    });

    if(existsAccessRequest) {
        const user = await User(db.sequelize).findOne({
            where: {
                uuid: user_id,
            },
        });
        console.log(user)
        req.user.patient=  user.dataValues;
        next();
    } else {
        return res.json({message:"Access denied"});
    }
}