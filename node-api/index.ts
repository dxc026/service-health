var express = require("express");
var app = express();

var users = ["Dennis", "Toby", "Isabelle", "Lindsay"];

//Express Server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//GET all users
app.get("/users", (req, res) => {
    res.json(users);
});