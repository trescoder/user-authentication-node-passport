require("dotenv").config();

const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const helmet = require("helmet");
const express = require("express");
const app = express();
const appRoutes = require("./routes/app.routes");

app.set("PORT", process.env.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(
  session({
    secret: process.env.SESSION_SECRET, // use to sign the session ID
    resave: false, // forces the session to be saved back to the session store
    saveUninitialized: false, // forces a session that is "uninitialized" to be saved to the store
    cookie: { maxAge: 60 * 60 * 1000 }, // 1hr
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(require("./auth/local.strategy"));
passport.use(require("./auth/jwt.strategy"));

app.get("/", (req, res) => res.redirect("/user/home"));
app.use("/user", appRoutes);

async function startServer() {
  const dbConnect = require("./db.config");
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const name = process.env.DB_NAME;

  if (process.env.NODE_ENV === "development") {
    await dbConnect(
      // here, we will connect from our machine to this container
      // in this case, we want to map request that come from our machine (localhost) to this container
      `mongodb://esperanto:password@localhost:${port}/${name}?authSource=admin`
    );
  } else {
    await dbConnect(
      // in this case another container in trying to connect to the one that hold mongodb
      `mongodb://esperanto:password@${host}:${port}/${name}?authSource=admin`
    );
  }

  app.listen(app.get("PORT"), () => {
    console.log(`Server running on port ${app.get("PORT")}`);
  });
}

startServer();
