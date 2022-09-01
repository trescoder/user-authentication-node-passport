const passport = require("passport");
const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/home", isLoggedIn, appRoutes.home);
router.post("/sign-up", appRoutes.signUp);

router.post(
  "/sign-in",
  passport.authenticate("local", { failureRedirect: "/home" }),
  appRoutes.signIn
);

module.exports = router;
