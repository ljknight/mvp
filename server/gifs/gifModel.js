var mongoose = require('mongoose');

var GIFSchema = new mongoose.Schema({
  views: Number,
  imageURL: String,
  likes: Number,
  dislikes: Number
});

module.exports = mongoose.model('GIF', GIFSchema);
