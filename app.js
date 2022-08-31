require("dotenv").config();

const express = require("express");
const app = express();
const appRoutes = require("./routes/app.routes");

app.set("PORT", process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.redirect("/user/home"));
app.use("/user", appRoutes);

app.listen(app.get("PORT"), "localhost", () => {
  console.log(`Server running on port ${app.get("PORT")}`);
});
