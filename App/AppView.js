var AppView = Backbone.View.extend ({
  el: '#container',

  template: _.template('<a href="<%= sourceURL %>" target="window"><img src="<%= imageURL %>"/></a>'),

  initialize: function() {
    // watches GIFs for a new add, re-renders page. this avoids the async rendering/ajax call.
    this.listenTo(this.collection, 'add', this.render);
    this.render();
    
    // this.currentGIFView = new CurrentGIFView();
    // this.historyView = new HistoryView({collection: this.model.get('history')});
  },

  render: function() {
    var gif = this.template({
      imageURL: this.collection.models[0].attributes.imageURL,
      sourceURL: this.collection.models[0].attributes.sourceURL
    })
    this.$el.html(gif)
    return this;
  }
});
