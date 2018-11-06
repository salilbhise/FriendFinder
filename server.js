// dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// sets up the express app
var app = express();

// connects to heroku
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  