const express = require("express");
const ejs = require("ejs");
const path = require("path");
const morgan = require("morgan");
const override = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const multer = require("multer");

require("dotenv").config("./.env");

// Inicia
const app = express();
require("../config/passport");

// settings
app.set("port", process.env.PORT || 3001);
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(override("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Variables Globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use(require("../routes/index.routes"));
app.use(require("../routes/notes.routes"));
app.use(require("../routes/users.routes"));
app.use(require("../routes/comentario.routes"));

// Static Files
app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;
