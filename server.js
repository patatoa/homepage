var port = process.env.port || 5000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/home/", function(request, response){
    response.sendFile(__dirname + "/public/home.html");
});

// app.get("/", function(request, response){
//     response.send("test");
// });

app.listen(port, function(){
    console.log(__dirname);
});
