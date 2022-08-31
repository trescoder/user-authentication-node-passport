const router = require("express").Router();
const appRoutes = require("../controllers/app.controller");

router.get("/home", appRoutes.home);

module.exports = router;
