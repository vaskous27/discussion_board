var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  ulike: Number
});
var User = mongoose.model('User', UserSchema);