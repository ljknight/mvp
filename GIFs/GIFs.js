// holds all potential GIFs - doesn't actually hold more than one for now
var GIFs = Backbone.Collection.extend ({
  model: CurrentGIF,

  initialize: function() {
    this.createRandomGIF();
  },

  createRandomGIF: function () { 
    var searchTerms = ['cat', 'dog', 'puppy', 'corgi', 'pug', 'harry+potter'];
    var randomSearchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    $.get(
      'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+randomSearchTerm+'',
      function(data) {
        console.log('data',data)
        // add new random gif to collection 
        this.add({
            imageURL: data.data.image_url,
            searchTerm: randomSearchTerm,
            sourceURL: data.data.url
          });

      }.bind(this) // do i need this?
    );
  }
});


