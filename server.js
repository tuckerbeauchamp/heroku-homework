const express = require("express");
// process env PORT tells our app to listen on the port heroku defines
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to my app, please enjoy your time here");
});

app.get("*", function (req, res) {
  res.send("This is my app, muahahahaha:)");
});

app.listen(PORT, () => console.log("app listening on port:", PORT));
