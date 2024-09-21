const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    // To check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    // To check if name was entered
    if (!lastName) {
      return res.json({
        error: "lastName is required",
      });
    }

    // To check if password is good
    if (!password || password < 6) {
      return res.json({
        error: "password is required and it should be at least 6 characters",
      });
    }

    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    // TO HASH THE PASSWORD FUNCTION FROM auth.js
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword, // To pass the hashedPassword
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // TO CHECK  IF  USER EXIST
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // TO CHECK IF PASSWORDS MATCH
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
  } catch (err) {}
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const logout = (req, res) => {
  // Clear the token by setting an empty cookie with an expired date
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logout,
};
