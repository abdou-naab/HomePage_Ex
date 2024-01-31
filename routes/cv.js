require("dotenv").config();
const { body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("cv_download");
});

router.post(
  "/",
  body("pass", "you must enter the correct password to download")
    .escape()
    .equals(process.env.PASS),
  function (req, res, next) {
    const errors = validationResult(req);
    const { pass, lang } = req.body;
    if (pass == process.env.PASS) {
      if (lang == "fr") res.redirect(process.env.CV_FR);
      else if (lang == "en") res.redirect(process.env.CV_EN);
      else {
        const errors = [
          { msg: "There was an error getting the file! Please try later." },
        ];
        res.render("cv_download", { errors });
      }
    } else if (!errors.isEmpty()) {
      console.log("errors", errors);
      res.render("cv_download", { errors: errors.array() });
      return;
    }
  }
);
module.exports = router;
