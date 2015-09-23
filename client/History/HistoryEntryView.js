var HistoryEntryView = Backbone.View.extend ({
  el: '<div class="historyEntry"></div>',

  // template: _.template('<p>Thing<p>'),

  initialize: function() {
    console.log('init historyentryview')
    this.render();
  },

  render: function() {
    console.log('historyEntryView')
    // var gif = this.template({
    //   // shows last image in the collection to make sure it's always showing the most recent
    //   // searchTerm: this.collection.models[this.collection.models.length-1].attributes.searchTerm,
    // });
    this.$el.html('<p>Thing</p>');
    return this;

    // var entry = this.template({
    //   weather: this.model.get('weather'),
    //   unit: this.model.get('unit'),
    //   city: this.model.get('city')
    // });

    // this.$el.html(entry);
  }
});
