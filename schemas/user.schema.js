const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    minLength: 4,
    maxLength: 20,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new model("User", UserSchema);
