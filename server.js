var port = process.env.PORT || 5000;
var path = require("path");
var express = require("express");

var app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/home/", function(request, response){
    response.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/work/", function(request, response){
    response.sendFile(path.join(__dirname, "public", "work.html"));
});

app.get("/", function(request, response){
    response.send("test");
});

app.listen(port, function(){
    console.log(__dirname);
});
