var express = require('express');
//var bodyParser = require('body-parser');
var path = require('path');

var fs = require('fs');

var app = express();
/*
var logger = function(req, res, next){
    console.log("logging....");
    next();
}

app.use(logger);
*/

// view engine

app.set('views', path.join(__dirname, 'views'));

//set static path
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res) {
    
    //res.sendfile('views/index.html');

    var page = fs.readfileSync('views/index.html');

    res.setHeader('Content-Type', 'text/html');
    res.send(page);
});


app.listen(3000, function () {
    console.log("Server started on port 3000...");
});