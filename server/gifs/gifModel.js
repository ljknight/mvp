var mongoose = require('mongoose');

var GIFSchema = new mongoose.Schema({
  imageURL: String,
  searchTerm: String,
  sourceURL: String,
  views: Number,
  likes: Number,
  dislikes: Number, 
});

var GIF = mongoose.model('GIF', GIFSchema);

module.exports = GIF;
