require("dotenv").config();

const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const helmet = require("helmet");
const express = require("express");
const app = express();
const appRoutes = require("./routes/app.routes");

app.set("PORT", process.env.PORT);

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET, // use to sign the session ID
    resave: false, // forces the session to be saved back to the session store
    saveUninitialized: false, // forces a session that is "uninitialized" to be saved to the store
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => res.redirect("/user/home"));
app.use("/user", appRoutes);

async function startServer() {
  const dbConnect = require("./db.config");
  await dbConnect("mongodb://localhost:27017/user-api");

  app.listen(app.get("PORT"), "localhost", () => {
    console.log(`Server running on port ${app.get("PORT")}`);
  });
}

startServer();
