const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//Instead of manually specifying the headers, there is a CORS Express middleware package that can be used instead.
var corsOptions = {
  origin: "*", // restrict calls to those this address
};
// NEW - replace custom middleware with the cors() middleware
app.use(cors(corsOptions));
//image upload
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//to connect to database
mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (e) => {
  console.log("error connecting to mongo",e);
  //exit
  process.exit(1);
});

//const db = require("./app/models");
// require("./app/models/user");

app.use(express.json()); //repalcement of bodyparser
require("./app/routes/auth.routes")(app);
require("./app/routes/teacher.route")(app);
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is runnng at port", process.env.PORT);
});
