'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {});
  Vote.associate = function (models) {
    // associations can be defined here
    Vote.belongsTo(models.Answer, { foreignKey: 'answerId' });
    Vote.belongsTo(models.Question, { foreignKey: 'questionId' });
    Vote.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Vote;
};
