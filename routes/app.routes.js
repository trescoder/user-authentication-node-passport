const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");

router.get("/home", appRoutes.home);
router.post("/sign-in", appRoutes.signIn);

module.exports = router;
