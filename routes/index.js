require("dotenv").config();

const express = require("express");
const router = express.Router();
const { projects } = require("../data");
const path = require("path");
router.get("/", function (req, res, next) {
  res.render("index", {
    projects,
    git: process.env.GITHUB,
    linkedin: process.env.LINKEDIN,
    email: process.env.EMAIL,
  });
});
router.get("/cv", function (req, res) {
  const file = path.join(__dirname, "..", "public", "files", "shop.jpg");
  res.download(file);
});

module.exports = router;
