const path = require("path");

const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Welcome to beautiful main page",
    path: "/",
  });
});

router.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Users",
    path: "/users",
    users,
  });
});

router.post("/users", (req, res) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

module.exports = router;
