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

const router = express.Router();

// MIDDLEWARE

// Apply CORS globally
const app = express(); // Assuming this is your Express app
app.use(cors({
  origin: 'https://pottery-pro-71wh.vercel.app', // Your frontend domain
  credentials: true, // Allow credentials (cookies, auth headers)
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT', // Allowed methods
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
}));

// ROUTES
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = allowCors(router);
