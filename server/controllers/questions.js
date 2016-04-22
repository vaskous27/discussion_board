var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');

module.exports = (function() {
    return {

new: function(req, res){

	var question = {
		title: req.body.title,
		description: req.body.description
	}

	Question.create(question, function(err, results) {
		console.log(question)
		if(err) {
			console.log(err);
		}
		else {
			res.json(results);
		}
    })
 },

index: function(req, res){
		Question.find({}, function(err, data){
			if(err) {
				console.log(err);
			}
			else {
		    res.json(data);
			}
		})
},
              

        findOne: function(req, res){
		Question.findOne({_id: req.params.id}, function(err, data){
			console.log(err, data);
		    res.json(data);
		})
    	},

//          numAnswers: function(req, res) {
//             console.log(req.body)
//             Question.update({like: req.body.num_answers}, {$inc: {qty:+req.body.num}, function (err, data) {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     res.json(true);
//                 }
//             })
//         }
    }
})();