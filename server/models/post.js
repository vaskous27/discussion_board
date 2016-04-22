var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
  name: String,
  post: String,
  like: Number,
  dislike: Number,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Post = mongoose.model('Post', PostSchema);