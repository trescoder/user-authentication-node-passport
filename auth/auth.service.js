const jwt = require("jsonwebtoken");

async function login(user) {
  const token = jwt.sign({ sub: user.username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
  return token;
}

module.exports = { login };
