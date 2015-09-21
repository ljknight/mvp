var AppView = Backbone.View.extend ({
  el: 'body',

  initialize: function() {
    this.currentGIFView = new CurrentGIFView({model: this.model.get('currentGIF')});
    this.historyView = new HistoryView({collection: this.model.get('history')});

    this.render();
  },

  render: function() {

    return this;
  }
});
