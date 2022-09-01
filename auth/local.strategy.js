const userService = require("../services/user.service");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { comparePassword } = require("../config/password.manager");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const LS = new LocalStrategy(async function verify(username, password, cb) {
  const user = await userService.getUser(username);
  if (!user) {
    return cb(null, false, { message: "Incorrect username or password" });
  }

  if (!comparePassword(user.password, password)) {
    return cb(null, false, { message: "Incorrect username or password" });
  }

  return cb(null, user);
});

module.exports = LS;
