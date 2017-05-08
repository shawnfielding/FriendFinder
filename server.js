var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = 3000;
var app = express();

var questions = ["I am looking for my lifetime partner.", "I come with strings attached.",
  "I like and and comfortable with sex.", "I am a morning person.", "I am spontaneous.",
  "My path in life is generally clear.", "I like to sleep touching my partner.", "I smoke/vape/use tobacco.",
  "I am looking for a partner in crime.", "Religion in the traditional sense is very important to me."
];


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var htmlControl = require("./routing/htmlRoutes.js");
var apiControl = require("routing/apiRoutes.js");

app.use("/", routing);

app.listen(port);
