var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {

		login: function(req, res) {
			User.findOne({name: req.body.name}, function(err, user) {
				if(err) {
					console.log(err);
				}
				else {
					if(user) {
						res.json(user);
					}
					else{
						User.create({name: req.body.name}, function(err, new_user) {
							if(err) {
								console.log(err);
							}
							res.json(new_user);
						})
					}
				}
			})
		},

		index: function(req, res){
				User.find({}, function(err, data){
					if(err) {
						console.log(err);
					}
					else {
				    res.json(data);
					}
				})
	    },

		// findOne: function(req, res){
		// 		User.find({name: req.params.name}, function(err, data){
		// 			if(err) {
		// 				console.log(err);
		// 			}
		// 			else {
		// 		    res.json(data);
		// 			}
	 //            })
	 //    },
    }
})();