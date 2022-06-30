const user = require("../models/UserModel");

const getRandomUserId = async () => {
  const users = await user.getAll();

  if (users.length > 0) {
    return users[Math.floor(Math.random() * users.length)];
  }
  return null;
};

module.exports = { getRandomUserId };
