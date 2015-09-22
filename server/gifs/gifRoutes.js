var gifController = require('./gifController.js');

module.exports = function (app) {
  // app === gifRouter injected from middleware.js

  app.route('/api/gifs')
    // .get(gifController.allLinks)
    .post(gifController.newGIF);

  // app.get('/:code', gifController.navToLink);
};
