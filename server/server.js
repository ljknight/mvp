var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/distraction-machine'); // connect to mongo database 

// configure server with all the middleware 
require('./config/middleware.js')(app, express);

app.listen(8000);

module.exports = app;

// // This function is responsible for returning all entries for the Message model
// var getGIFs = function(req, res, next) {
//   // Resitify currently has a bug which doesn't allow you to set default headers
//   // This headers comply with CORS and allow us to mongodbServer our response to any origin
//   res.header("Access-Control-Allow-Origin", "*"); 
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  
//   console.log("mongodbServer getMessages");

//   Message.find().limit(20).sort('date', -1).execFind(function (arr,data) {
//     res.send(data);
//   });
// }

// var postGIF = function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   // Create a new message model, fill it up and save it to Mongodb
//   var gif = new GIF(); 
  
//   console.log("mongodbServer postMessage: " + req.params);


//   gif.views = 0;
//   gif.likes = 0; 
//   gif.dislikes = 0;
//   gif.imageURL = req.body;
//   gif.save(function () {
//     res.send(req.body);
//   });
// }

// mongodbServer.listen(mongodbPort, function() {
  
//   var consoleMessage = '\n MongoDb, Mongoose, Restify, and Backbone Tutorial'
//   consoleMessage += '\n +++++++++++++++++++++++++++++++++++++++++++++++++++++' 
//   consoleMessage += '\n\n %s your mongodbServer is listening at %s';
//   consoleMessage += '\n\n open your browser to http://localhost:8000/gifs \n\n';
//   consoleMessage += '+++++++++++++++++++++++++++++++++++++++++++++++++++++ \n\n'  
 
//   console.log(consoleMessage, mongodbServer.name, mongodbServer.url);

// });

// // mongodbServer.get('/gifs', getGIFs);
// mongodbServer.post('/gifs', postGIF);
