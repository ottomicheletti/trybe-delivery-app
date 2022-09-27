const md5 = require('md5');
const CustomError = require('../err/CustomError');
const { generateToken } = require('../helpers/generate.token');
const loginRepository = require('../repositories/login.repository');

const getUser = async ({ email, password }) => {
  const hashedPassword = md5(password);
  const user = await loginRepository.getUser({ email });

  if (!user) throw new CustomError(404, 'Not found');

  if (hashedPassword !== user.password) throw new CustomError(404, 'Password mismatch');

  const token = generateToken(user);

  return [user, { token }];
};

module.exports = {
  getUser,
};
