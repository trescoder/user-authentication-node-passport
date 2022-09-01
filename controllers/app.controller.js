const UserService = require("../services/user.service");

function home(req, res) {
  res.status(200).send("<h1>First Attempt</h1>");
}

async function signIn(req, res) {
  const { username, password } = req.body;
  const { status, data } = await UserService.createUserAccount({
    username,
    password,
  });
  res.status(status).json({ data });
}

module.exports = {
  home,
  signIn,
};
