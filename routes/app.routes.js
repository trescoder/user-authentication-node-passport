const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");

router.get("/home", appRoutes.home);
router.post("/sign-up", appRoutes.signIn);

module.exports = router;
