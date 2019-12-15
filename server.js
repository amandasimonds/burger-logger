// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Data
var icecreams = [
    {name: "van", price: 10, awesomeness: 3},
    {name: "choc", price: 10, awesomeness:10},
    {name: "pistash", price: 5, awesomeness: 14}
  ];
  
  // Routes
  app.get("/icecreams/:name", function(req, res) {
    res.render("index", icecreams[0]);
  });
  
  app.get("/icecreams", function(req, res) {
    res.render("index", icecreams[0]);
  });
  
  app.get("/icecreams", function(req, res) {
    res.render("icecream", {
      icecreams: name,
      flavoroftheweek: "ROCKY ROOOOOAD"
    });
  });
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
