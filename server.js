var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

mongoose.Promise = Promise;

var app = express();
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(express.static(process.cwd() + "/public"));


// CONNECTING TO MONGODB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

var router = express.Router();

  require("./config/routes")(router);
  app.use(router);

var port = process.env.PORT || 3000;

  app.listen(port, function() {
    console.log("app running on port " + port);
  });
