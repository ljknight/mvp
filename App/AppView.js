var AppView = Backbone.View.extend ({
  el: '#container',

  initialize: function() {
    this.currentGIF = new CurrentGIFView({ collection: this.collection });
    this.button = new ButtonView({ collection: this.collection });
    this.render();
  },

  render: function() {
    this.$el.append(this.currentGIF, this.button.$el)
    return this;
  }
});


