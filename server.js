var port = process.env.PORT || 5000;
var path = require("path");
var sass = require("node-sass-middleware");
var express = require("express");

var app = express();
app.use(
    sass({
        src: __dirname +  '/node_modules/foundation-sites/assets/',
        dest: __dirname + '/public/css/',
        prefix: '/css/',
        debug: true
    })
);
app.use(express.static(path.join(__dirname, "public")));
app.use('/js/foundation/', express.static(__dirname + '/node_modules/foundation-sites/dist/js'));
app.use('/css/foundation/', express.static(__dirname + '/node_modules/foundation-sites/dist/css'));
app.use('/js/', express.static(__dirname + '/node_modules/'));

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
