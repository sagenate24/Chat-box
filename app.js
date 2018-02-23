var express = require('express');
var path = require('path');
//var fs = require('fs');

var app = express();

//set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

//HTML pages
app.get('/', function (req, res) {
    
    res.sendfile('views/index.html');
});
app.get('/todo', function (req, res) {
    
    res.sendfile('views/index.html');

});
app.get('/Famousperson', function (req, res) {
    
    res.sendfile('dist/index.html');

});

//Local host 3000 and stuff
app.listen(3000, function () {
    console.log('Server started on port 3000...');
});

