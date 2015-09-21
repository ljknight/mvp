var AppView = Backbone.View.extend ({
  el: '#container',

  template: _.template('<img src="<%= imageURL %>"/>'),

  initialize: function() {
    // this.currentGIFView = new CurrentGIFView();
    this.listenTo(this.collection, 'add', this.render);
    // this.historyView = new HistoryView({collection: this.model.get('history')});
    this.render();


  },

  render: function() {
    var gif = this.template({
      imageURL: this.collection.models[0].attributes.imageURL
    })
    this.$el.html(gif)
    console.log(this.collection.models[0].attributes)
    return this;
  }
});
