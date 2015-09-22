var gif = require('./gifModel.js');
var Q = require('q');

// search db to see if gif exists (search by url)
// if not, add it
// add like
// add dislike
// keep track of visits
// save in db



module.exports = {
  // findGIF: function (req, res, next, code) {
  //   var findLink = Q.nbind(gif.findOne, gif);
  //   findLink({code: code})
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
    
    var createGif = Q.nbind(gif.create, gif);
    var findGif = Q.nbind(gif.findOne, gif);

    findGif({imageURL: imageURL})
      .then(function (match) {
        if (match) {
          console.log('match', match)
          res.send(match);
        } else {
          console.log('not match');
        }
      })
      .then(function () {
        // console.log('title', title)
        // if (title) {
          var newGif = {
            imageURL: imageURL,
            searchTerm: '',
            sourceURL: '',
            views: 0,
            likes: 0,
            dislikes: 0,
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
};
