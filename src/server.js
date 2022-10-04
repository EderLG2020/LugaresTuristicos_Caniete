const express = require("express");
const ejs = require("ejs");
const path = require("path");
const morgan = require("morgan");
const override = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config("./.env");

// Inicia
const app = express();

// settings
app.set("port", process.env.PORT || 3001);
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(override("_method"));
app.use(
  session({
    secret: "secreto123",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Variables Globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  next();
});

// Routes
app.use(require("../routes/index.routes"));
app.use(require("../routes/notes.routes"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
