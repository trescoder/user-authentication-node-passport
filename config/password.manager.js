const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);

async function hashPassword(password) {
  return bcrypt.hash(password, salt);
}
async function comparePassword(inboundPassword, storedPassword) {
  return bcrypt.compare(inboundPassword, storedPassword);
}

module.exports = { hashPassword, comparePassword };
