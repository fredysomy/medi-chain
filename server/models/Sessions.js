const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    sid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "sid"
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "expires"
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    }
  };
  const options = {
    tableName: "Sessions",
    comment: "",
    indexes: []
  };
  const SessionsModel = sequelize.define("Sessions_model", attributes, options);
  return SessionsModel;
};