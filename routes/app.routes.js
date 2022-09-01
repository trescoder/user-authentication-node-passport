const passport = require("passport");
const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/home", appRoutes.home);
router.get("/:username/profile", isLoggedIn, appRoutes.getUserProfile);
router.post("/sign-up", appRoutes.signUp);
router.post(
  "/sign-in",
  passport.authenticate("local", { failureRedirect: "/home" }),
  appRoutes.signIn
);
router.post("/log-out", appRoutes.logOut);

module.exports = router;
