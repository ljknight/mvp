var gif = require('./gifModel.js');
var Q = require('q');

module.exports = {
  // do I need this method?
  // findGIF: function (req, res, next, imageURL) {
  //   var findGif = Q.nbind(gif.findOne, gif);

  //   findGif({imageURL: imageURL})
  //     .then(function (link) {
  //       if (link) {
  //         req.navLink = link;
  //         next();
  //       } else {
  //         next(new Error('Link not added yet'));
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },

  allGIFs: function (req, res, next) {
    var findAll = Q.nbind(gif.find, gif);

    findAll({})
    .then(function (gifs) {
      console.log('found all gifs: ', gifs);
      res.json(gifs);
    })
    .fail(function (error) {
      console.log('error finding gifs: ', error);
      next(error);
    });
  },

  newGIF: function (req, res, next) {
    var imageURL = req.body.imageURL;
    var searchTerm = req.body.searchTerm;
    var sourceURL = req.body.sourceURL;
    var views = req.body.views;
    var likes = req.body.likes;
    var dislikes = req.body.dislikes;
    
    var createGif = Q.nbind(gif.create, gif);
    var findGif = Q.nbind(gif.findOne, gif);

    findGif({imageURL: imageURL})
      .then(function (match) {
        console.log('this is match?', match)
        if (match) {
          res.send(match);
          return;
        } else {
          console.log('no match, creating gif')
        }
      })
      .then(function () {
        var newGif = {
          imageURL: imageURL,
          searchTerm: searchTerm,
          sourceURL: sourceURL,
          views: views,
          likes: likes,
          dislikes: dislikes,
        };
        return createGif(newGif);
      })
      .then(function (createdGif) {
        if (createdGif) {
          console.log('created gif! ', createdGif);
          res.json(createdGif);
        }
      })
      .fail(function (error) {
        console.log('error creating gif: ', error);
        next(error);
      });
  },

  updateGIF: function (req, res, next) {
    console.log('updating gif', req)
  },
};
