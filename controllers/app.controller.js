const UserService = require("../services/user.service");

function home(req, res) {
  res.status(200).send("<h1>First Attempt</h1>");
}

async function signUp(req, res) {
  const { username, password } = req.body;
  const { status, data } = await UserService.createUserAccount({
    username,
    password,
  });
  res.status(status).json({ data });
}

async function signIn(req, res) {
  // console.log(req.session.passport.user);
  res.status(200).json({ msg: "Done" });
}

module.exports = {
  home,
  signUp,
  signIn,
};
