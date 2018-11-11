// dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

// sets up the express app
var app = express();

// connects to heroku
var PORT = process.env.PORT || 8000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

// api routes
//require('./app/routing/apiRoutes')(app);
//require('./app/routing/htmlRoutes')(app);

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  