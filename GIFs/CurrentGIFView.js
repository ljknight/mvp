// only show last item in collection (most recent gif)
var CurrentGIFView = Backbone.View.extend ({
  el: '#current',

  template: _.template('<a href="<%= sourceURL %>" target="window"><img src="<%= imageURL %>"/></a>'),

  initialize: function() {
    // watches GIFs for a new add, re-renders page. this avoids the async rendering/ajax call.
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    var gif = this.template({
      // shows last image in the collection to make sure it's always showing the most recent
      imageURL: this.collection.models[this.collection.models.length-1].attributes.imageURL,
      sourceURL: this.collection.models[this.collection.models.length-1].attributes.sourceURL
    });
    this.$el.append(gif);
    return this;
  }
});
