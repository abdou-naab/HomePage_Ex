require("dotenv").config();
// const { body, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();
const { projects } = require("../data");
const path = require("path");
router.get("/", function (req, res, next) {
  res.render("index", {
    scriptNeeded: true,
    projects,
    git: process.env.GITHUB,
    linkedin: process.env.LINKEDIN,
    email: process.env.EMAIL,
  });
});

module.exports = router;
