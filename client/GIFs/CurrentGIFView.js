// only show last item in collection (most recent gif)
var CurrentGIFView = Backbone.View.extend ({
  el: '#current',

  template: _.template('<div><a href="<%= sourceURL %>" target="window"><img src="<%= imageURL %>"/></a></div>'),

  initialize: function() {
    // watches GIFs for a new add, re-renders page. this avoids the async rendering/ajax call.
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'add', this.increaseViews);
    this.render();
  },

  increaseViews: function() {
    // increases views for the current gif - not checking entire collection - not adding anything to DB
   
    // not working
    var model = this.collection.at(this.collection.length-1);
    var views = model.get('views');
    model.set('views', views + 1);
    console.log(model.get('views'))
    // this.collection.models[this.collection.models.length-1].attributes.views++;
  },

  render: function() {
    this.$el.empty();
    var gif = this.template({
      // shows last image in the collection to make sure it's always showing the most recent
      imageURL: this.collection.models[this.collection.models.length-1].attributes.imageURL,
      sourceURL: this.collection.models[this.collection.models.length-1].attributes.sourceURL,
    });
    this.$el.append(gif);
    return this;
  }
});
