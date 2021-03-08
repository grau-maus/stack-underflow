'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: 'userId' });
    User.hasMany(models.Answer, { foreignKey: 'userId' });
    User.hasMany(models.Vote, { foreignKey: 'userId' });
  };
  return User;
};
