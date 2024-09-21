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
    credentials: true,
    origin: "https://pottery-pro-71wh.vercel.app",
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    allowedHeaders:
      "Content-Type, Authorization, X-Requested-With, X-CSRF-Token",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
