module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createAt: DataTypes.DATE
  });

  return users;
};