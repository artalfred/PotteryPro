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
<<<<<<< HEAD
    origin: "http://localhost:5173",
    methods: "GET, POST",
=======
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",  // Ensure correct headers are allowed
>>>>>>> 40c18bdd413ded58a15f909ce3d05de2ee2a695e
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
