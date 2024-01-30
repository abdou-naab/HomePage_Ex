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
      const file = path.join(
        __dirname,
        "..",
        "public",
        "files",
        `abderrahmane-naab(${lang}).pdf`
      );
      fs.readFile(file, (err, data) => {
        if (err) {
          const errors = [
            { msg: "There was an error reading the file! Please try later." },
          ];
          console.log("errors", errors);
          res.render("cv_download", { errors });
        }
        res.download(file);
      });
    } else if (!errors.isEmpty()) {
      console.log("errors", errors);
      res.render("cv_download", { errors: errors.array() });
      return;
    }
  }
);
module.exports = router;
