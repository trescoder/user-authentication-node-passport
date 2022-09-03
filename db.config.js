const mongoose = require("mongoose");

async function dbConnection(url) {
  try {
    await mongoose.connect(url);
    console.log("Database connection done!");
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = dbConnection;
