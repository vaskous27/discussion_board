var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});
var User = mongoose.model('User', UserSchema);