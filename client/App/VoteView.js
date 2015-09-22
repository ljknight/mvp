var VoteView = Backbone.View.extend({
  el: '.vote',

  template: _.template('<button class="vote-button yay">yay <%= likes %></button><button class="vote-button nay">nay <%= dislikes %></button>'),

  events: {
    // only ever affecting the current gif (last in collection) - not checking whole collection, not connected to db
    'click .yay': function() {
      this.collection.models[this.collection.models.length-1].attributes.likes++;
      console.log(this.collection.models[this.collection.models.length-1].attributes.likes);
      this.render();
      $('.vote-button').prop("disabled", true)
    },
    'click .nay': function() {
      this.collection.models[this.collection.models.length-1].attributes.dislikes++;
      console.log(this.collection.models[this.collection.models.length-1].attributes.dislikes);
      this.render();
      $('.vote-button').prop("disabled", true)
    }
  },

  initialize: function() {
    // only render when gif is added - otherwise this will prevent gif from loading
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.$el.empty();
    var votes = this.template({
      likes: this.collection.models[this.collection.models.length-1].attributes.likes,
      dislikes: this.collection.models[this.collection.models.length-1].attributes.dislikes
    })
    this.$el.append(votes);
    return this;
  }
});



