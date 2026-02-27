const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const user = req.query.user;
  res.send("Hello " + user);  
});

app.listen(3000, () => console.log("App running"));