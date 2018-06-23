var port = process.env.PORT || 5000;
var path = require("path");
var express = require("express");

var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use('/content/', express.static(__dirname + '/node_modules/foundation/scss'));

app.get("/home/", function(request, response){
    response.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/work/", function(request, response){
    response.sendFile(path.join(__dirname, "public", "work.html"));
});

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "public", "work.html"));
});

app.listen(port, function(){
    console.log(`listeningat http://localhost:${port}`);
});
