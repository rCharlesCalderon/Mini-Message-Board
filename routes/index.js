var express = require("express");
const { func } = require("prop-types");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages });
});

router.get("/new", function (req, res) {
  res.render("form", { messages: messages });
});

router.post("/new", function (req, res) {
  messages.push({ text: req.body.msgText });
  res.redirect("/");
});
module.exports = router;
