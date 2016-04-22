var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  answer: String,
  description: String,
  like: Number,
  num: Number
  // _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  // _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Post = mongoose.model('Answer', AnswerSchema);