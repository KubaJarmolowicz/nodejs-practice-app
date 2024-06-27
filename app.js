const path = require("path");
const bodyParser = require("body-parser");

const userRoutes = require("./routes");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
