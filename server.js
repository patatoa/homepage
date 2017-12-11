var port = 3000;
var express = require("express");

var app = express();
app.use(express.static(__dirname ));

app.get("/home/", function(request, response){
    response.sendFile(__dirname + "/home.html");
});

app.get("/", function(request, response){
    response.send("test");
});

app.listen(port, function(){
    console.log(__dirname);
});
