// holds all potential GIFs - doesn't actually hold more than one for now
var GIFs = Backbone.Collection.extend ({
  model: CurrentGIF,

  url: '/gifs',

  initialize: function() {
    this.createRandomGIF();
  },

  createRandomGIF: function () { 
    var searchTerms = ['cat', 'kitten', 'dog', 'puppy', 'corgi', 'pug', 'goat', 'cute+animal', 'pusheen', 'zoolander', 'seinfeld', 'bill+murray','tina+fey', 'amy+schumer', 'arrested+development', 'pizza', 'donut'];
    var randomSearchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    $.get(
      'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+randomSearchTerm+'',
      function(data) {
        // add new random gif to collection and DB
        var model = this.create({
            imageURL: data.data.image_url,
            searchTerm: randomSearchTerm,
            sourceURL: data.data.url,
          });
      }.bind(this)
    );
  }
});


