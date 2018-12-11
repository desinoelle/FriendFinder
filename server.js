// Require these packages
var express = require("express");
var path = require("path");

// Set up express app
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// HTML Routes

// Home Route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// Survey Route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"))
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
});