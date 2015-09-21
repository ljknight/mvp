var AppModel = Backbone.Model.extend ({
  initialize: function () {
    // keeps track of current gif
    this.set('currentGIF', new CurrentGIF());
    // keeps track of the gif history
    this.set('history', new HistoryCollection());
  

    // when things are clicked on the app view/history view 
      // move current gif to history collection
      // change the current gif (create new currentgif)
      // need to take searchTerms into consideration for selecting new gif

  }
});
