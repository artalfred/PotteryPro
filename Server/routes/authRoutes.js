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
    origin: "https://artfulpotteryprofrontend.netlify.app",
    methods: "GET, POST",
    optionsSuccessStatus: 200,
  })
);

const app = express();

app.use(cors(router));

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
