// Getting our requires
const express = require("express"); 
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



// Listening for PORT
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:8080")
})
