var ButtonView = Backbone.View.extend({
  el: '.random-button',

  events: {
    'click': function() {
      // when this is clicked - 
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
