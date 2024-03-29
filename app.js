require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const indexRouter = require("./routes/index");
const sendEmailRouter = require("./routes/sendEmail");
const cvRouter = require("./routes/cv");
const app = express();
app.use(compression());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
const excludeFromRateLimit = (req, res, next) => {
  const excludedPaths = ["/images", "/javascripts"];
  const isExcluded = excludedPaths.some((path) => req.url.startsWith(path));
  if (isExcluded) {
    next();
  } else {
    limiter(req, res, next);
  }
};
app.use(excludeFromRateLimit);

app.use("/", indexRouter);
app.use("/send-email", sendEmailRouter);
app.use("/cv", cvRouter);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

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

module.exports = app;
