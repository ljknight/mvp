var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/distraction-machine'); // connect to mongo database 

// configure server with all the middleware 
require('./config/middleware.js')(app, express);

app.listen(8000);

module.exports = app;
