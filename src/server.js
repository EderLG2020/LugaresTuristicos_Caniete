const express = require("express");
const path = require("path");
require("dotenv").config("./.env");

// Inicia
const app = express();

// settings
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname + "views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("hola :v");
});

// Variables Globales

// Static Files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
