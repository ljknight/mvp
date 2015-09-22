var gifController = require('./gifController.js');
// var app = require('../config/middleware.js')

module.exports = function (app) {
  // app === gifRouter injected from middleware.js
  app.route('/')
    .get(gifController.allGIFs)
    .post(gifController.newGIF);
};
