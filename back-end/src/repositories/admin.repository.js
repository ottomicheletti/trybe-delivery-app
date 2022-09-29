const { Op } = require('sequelize');
const { users } = require('../database/models');

const getUser = async ({ name, email, role }) => {
  switch (role) {
    case !role:
      const userObj = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
      return userObj;
    default:
      const users = await users.findAll({ where: { [Op.not]: [role === 'administrator'] } });
      return users;
  };
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await users.create({ name, email, password, role });
  return newUser;
};

const deleteUser = async ({ name, email }) => {
  const deletedUser = await users.destroy({ where: { [Op.or]: [{ name }, { email }] } });
  return deletedUser;
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
};