const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Assuming you'll need cookies
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

const app = express();
const router = express.Router();

// Apply CORS middleware globally to your app
app.use(
  cors({
    credentials: true, // Allow credentials (cookies, authorization headers)
    origin: "https://artfulpotteryprofrontend.netlify.app", // Your frontend URL
    methods: "GET, POST", // HTTP methods allowed
    optionsSuccessStatus: 200, // For legacy browsers (IE11, etc.)
  })
);

// Middleware for parsing requests
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // If using cookies

// Define your routes
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

// Mount the router
app.use("/", router);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server running on port " + port));

module.exports = router;
