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
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    allowedHeaders: "Content-Type, Authorization, X-Requested-With, X-CSRF-Token",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
