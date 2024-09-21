const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// DATABASE CONNECTIONS
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Databases not connected", err));

// MIDDLEWARE
app.use(cors({
  origin: "https://artfullprotterypro.vercel.app" || "http://localhost:5173",  // Ensure correct origin
  credentials: true,
}));

// MIDDLEWARE FOR authController
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("listening on port " + port));
