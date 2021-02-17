var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dishRouter = require("./routes/dish-router");
var promoRouter = require("./routes/promo-router");
var leaderRouter = require("./routes/leader-router");

const USERS_ROUTE = "/api/v1/users";
const DISHES_ROUTE = "/api/v1/dishes";
const PROMOTIONS_ROUTE = "/api/v1/promotions";
const LEADERS_ROUTE = "api/v1/leaders";

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/conFusion"; //should be replaced with remote url when app goes live

var app = express();

var app = express();
connectToDatabase();
setUpServer(app);
routing();
setupErrorHandling();

function setUpServer(app) {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
}
function routing() {
  app.use("/", indexRouter);
  app.use(USERS_ROUTE, usersRouter);
  app.use(DISHES_ROUTE, dishRouter);
  app.use(PROMOTIONS_ROUTE, promoRouter);
  app.use(LEADERS_ROUTE, leaderRouter);
}
function connectToDatabase() {
  const connect = mongoose.connect(url, { useNewUrlParser: true });
  connect.then(
    (db) => {
      console.log("Database connection successful!");
    },
    (err) => {
      console.log(err);
    }
  );
}
function setupErrorHandling() {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
}
module.exports = app;
