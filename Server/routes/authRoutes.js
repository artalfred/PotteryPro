const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

// MIDDLEWARE
router.use(
  cors({
    origin: "https://artfullprotterypro.vercel.app",
    credentials: true,
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization",  // Ensure correct headers are allowed
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
