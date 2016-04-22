var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Comment = mongoose.model('Comment', CommentSchema);