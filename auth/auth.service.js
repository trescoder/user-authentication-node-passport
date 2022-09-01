const jwt = require("jsonwebtoken");

async function login(user) {
  const token = jwt.sign({ sub: user.username }, process.env.JWT_SECRET);
  return token;
}

module.exports = { login };
