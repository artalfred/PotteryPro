const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logout,
} = require("./controllers/authController");

const app = express();

// DATABASE CONNECTIONS
mongoose
  .connect(process.env.MONGODB_CONNECT_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Databases not connected", err));

// MIDDLEWARE FOR authController
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE
app.use(
  cors({
    credentials: true,
    origin: "https://artfulpotteryprofrontend.netlify.app",
    methods: "GET, POST",
    optionsSuccessStatus: 200,
  })
);

app.get("/", test);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/profile", getProfile);
app.post("/logout", logout);

const port = 8000;
app.listen(port, () => console.log("listening on port " + port));
