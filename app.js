const path = require("path");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/usersRoutes");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

// app.use("/users", (req, res, next) => {
//   res.send("<h1>Welcome to '/users' my man!</h1>");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>Pretty h1 for the prettiest website of all!</h1>");
// });

app.listen(3000);
