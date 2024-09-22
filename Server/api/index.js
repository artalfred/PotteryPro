const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());

// DATABASE CONNECTIONS
mongoose
  .connect(process.env.MONGODB_CONNECT_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Databases not connected", err));

// MIDDLEWARE FOR authController
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("../routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log("listening on port " + port));
