var Comments = require('./../controllers/comments.js');
var Posts = require('./../controllers/posts.js');
var Topics = require('./../controllers/topics.js');
var Users = require('./../controllers/users.js');

  module.exports = function(app) {

	// app.get('/users', function(req, res) {
	//   users.index(req, res);
	// })

  app.get('/users/:name', function(req, res) {
    Users.index(req, res);
  })

  app.post('/login', function(req, res) {
    Users.login(req, res);
  })

  app.get('/topics', function(req, res) {
    Topics.index(req, res);
  })

  app.get('/topic/:id', function(req, res) {
    Topics.fineOne(req, res);
  })

  app.post('/topics/new', function(req, res) {
    Topics.new(req, res);
  })

  app.get('/posts', function(req, res) {
    Posts.index(req, res);
  })

  app.post('/posts/new', function(req, res) {
    Posts.new(req, res);
  })

  app.get('/comments', function(req, res) {
    Comments.index(req, res);
  })

  app.post('/comments/new', function(req, res) {
    Comments.new(req, res);
  })
	

  };