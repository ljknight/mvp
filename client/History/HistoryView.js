var HistoryView = Backbone.View.extend ({
  el: '#history',

  initialize: function() {
    console.log('init historyview')
    listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    // create new history entry view for each item in collection
    console.log('historyview',this.collection)
    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new HistoryEntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
  }
});
