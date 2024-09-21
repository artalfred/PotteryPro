const mongoose = require("mongoose");
const { Schema } = mongoose;

// TO SEND DATA TO THE DATABASE FROM FRONTEND
const userSchema = {
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
