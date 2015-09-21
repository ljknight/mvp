var ButtonView = Backbone.View.extend({
  el: '.random-button',

  events: {
    'click': function() {
      this.collection.createRandomGIF();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }
});
