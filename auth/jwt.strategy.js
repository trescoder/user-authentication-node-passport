const userService = require("../services/user.service");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOpts = {};
jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = process.env.JWT_SECRET;

const JS = new JwtStrategy(jwtOpts, async function (jwt_payload, done) {
  const user = await userService.getUser(jwt_payload.sub);
  if (!user) {
    return done(null, false);
  }
  return done(null, user);
});

module.exports = JS;
