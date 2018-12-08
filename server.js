// Require these packages
var express = require("express");
var path = require("path");

// Access to friends
var allFriends = require("app/data/friends.js");
var friends = allFriends.friendsArray;

// Set up express app
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// HTML Routes

// Home Route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Survey Route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
});

// API Routes

// JSON of all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// POST for incoming survey results
app.post("/api/friends", function(req, res) {
    // New friend posted
    var newFriend = req.body;

    friends.push(newFriend);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});