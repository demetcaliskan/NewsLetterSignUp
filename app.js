const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res) {
  console.log(req.body.fName);
  console.log(req.body.lName);
  console.log(req.body.email);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
