var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
  title: String,
  description: String
  // answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  // num_answers: Number
});
var Topic = mongoose.model('Question', QuestionSchema);
