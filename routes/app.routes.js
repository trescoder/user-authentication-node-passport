const passport = require("passport");
const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/home", appRoutes.home);
router.get(
  "/:username/profile",
  passport.authenticate("jwt", { session: false }),
  appRoutes.getUserProfile
);

router.post("/sign-up", appRoutes.signUp);
router.post(
  "/sign-in",
  // with this in place, after a user is logged in, not session cookie es created
  passport.authenticate("local", { failureRedirect: "/home", session: false }),
  appRoutes.signIn
);
router.post("/log-out", appRoutes.logOut);

module.exports = router;
