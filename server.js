const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.get("*", function (req, res) {
  res.send("This is my app, muahahahaha:)");
});

app.listen(PORT, () => console.log("app listening on port:", PORT));
