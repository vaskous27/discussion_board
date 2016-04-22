var Answers = require('./../controllers/answers.js');
var Questions = require('./../controllers/questions.js');
var Users = require('./../controllers/users.js');

  module.exports = function(app) {


  app.get('/users/:name', function(req, res) {
    Users.index(req, res);
  })

  app.post('/login', function(req, res) {
    Users.login(req, res);
  })

  app.get('/questions', function(req, res) {
    Questions.index(req, res);
  })

  app.get('/question/:id', function(req, res) {
    Questions.findOne(req, res, req.params.id);
  })

  app.get('/question/:id/new_answer', function(req, res) {
    Questions.findOne(req, res, req.params.id);
  })

  app.post('/questions/new', function(req, res) {
    Questions.new(req, res);
  })

  app.get('/answers', function(req, res) {
    Answers.index(req, res);
  })

  app.put('/num_answers', function(req, res) {
  Questions.numAswers(req, res);
  })

  app.post('/answers/new', function(req, res) {
    Answers.new(req, res);
  })

  app.put('/likes', function(req, res) {
  Answers.likes(req, res);
  })


  };