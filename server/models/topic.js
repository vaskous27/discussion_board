var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
  topic_title: String,
  description: String,
  Category: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Topic = mongoose.model('Topic', TopicSchema);
