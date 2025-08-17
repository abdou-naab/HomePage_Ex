require("dotenv").config();
const { body, validationResult } = require("express-validator");

const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

const validateForm = [
  body("name", "at least have a 3 chars name.")
    .trim()
    .isLength({ min: 3, max: 80 })
    .escape(),
  body("email", "enter a valid email").trim().isEmail().escape(),
  body("subject").optional().trim().escape(),
  body("message", "you need to send me something")
    .trim()
    .isLength({ min: 1 })
    .escape(),
];

router.get("/", function (req, res, next) {
  res.render("email_form");
});
router.post("/", validateForm, function (req, res, next) {
  const { name, email, subject, message } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("email_form", {
      name,
      email,
      subject,
      message,
      errors: errors.array(),
    });
  } else {
    sendEmail(res, name, email, subject, message);
  }
});

function sendEmail(res, name, email, subject, message) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.DIST_EMAIL,
    subject: name + " - email: " + email,
    text: subject + " \n" + message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.render("email_form", {
        name,
        email,
        subject,
        message,
        errors: ["Error sending email: " + error],
      });
    } else {
      // console.log(`Email ${info.messageId} sent: ` + info.response);
      res.redirect("/");
    }
  });
}

module.exports = router;
