// link to the data
var friendData = require("../data/theFriends");

// Routing for API calls

app.get("/api/friends", function(req, res) {
  res.json(tableData);
});

app.post("/api/friends", function(req, res) {
  res.json(tableData);
});
