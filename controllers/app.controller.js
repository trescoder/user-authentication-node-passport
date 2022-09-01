const UserService = require("../services/user.service");
const AuthService = require("../auth/auth.service");

function home(req, res) {
  res.status(200).send("<h1>Logged Out!</h1>");
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
  // console.log(req);
  const token = await AuthService.login(req.user);
  res.status(200).json({ access_token: token });
}

async function logOut(req, res) {
  req.logout((err) => {
    console.log("redirecting...");
    res.redirect(301, "/");
  });
}

async function getUserProfile(req, res) {
  const username = req.params["username"];
  const user = await UserService.getUser(username);
  if (user) {
    return res.status(200).json({ user });
  }
  return res.status(404).json({});
}

module.exports = {
  home,
  signUp,
  signIn,
  logOut,
  getUserProfile,
};
