const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("I only run for /users!");
  res.send("<h1>Welcome to '/users' my man!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("I run for home!");
  res.send("<h1>Pretty h1 for the prettiest website of all!</h1>");
});

app.listen(3000);
