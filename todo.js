var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('views', path.join(__dirname, 'views'));

//set static path
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res) {

    var page = fs.readFileSync('views/Todo.html');

    res.setHeader('Content-Type', 'text/html');
    res.send(page);
    
});


app.listen(3000, function () {
    console.log("Server started on port 3000...");
});