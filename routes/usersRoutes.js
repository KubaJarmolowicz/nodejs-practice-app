const path = require("path");

const express = require("express");

const { rootFolderPath } = require("../utils");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("rootFolderPath");
  res.sendFile(path.join(rootFolderPath, "views", "index.html"));
});

router.get("/users", (req, res) => {
  res.sendFile(path.join(rootFolderPath, "views", "users.html"));
});

module.exports = router;
