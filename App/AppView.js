var AppView = Backbone.View.extend ({
  el: '#container',

  initialize: function() {
    this.button = new ButtonView({ collection: this.collection });
    this.currentGIF = new CurrentGIFView({ collection: this.collection });
    this.render();
  },

  render: function() {
    this.$el.append([
      this.button.$el,
      this.currentGIF.$el
    ]);

    return this;
  }
});


