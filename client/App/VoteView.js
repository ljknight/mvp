var VoteView = Backbone.View.extend({
  el: '.vote',

  template: _.template('<button class="vote-button yay">yay <%= likes %></button><button class="vote-button nay">nay <%= dislikes %></button>'),

  events: {
    // only ever affecting the current gif (last in collection) - not checking whole collection, not connected to db
    'click .yay': function() {
      var model = this.collection.at(this.collection.length-1);
      console.log('before save', model.attributes.likes)
      model.set({likes: 1})
      this.render();
      $('.vote-button').prop("disabled", true)
      console.log('after save',model.attributes.likes)
    },
    'click .nay': function() {
      this.collection.models[this.collection.models.length-1].attributes.dislikes++;
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



