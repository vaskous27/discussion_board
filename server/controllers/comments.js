var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = (function() {
    return {

        new: function(req, res){
                    Comment.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
                 },
                 
        index: function(req, res){
                    Comment.find({}, function(err, data){
                        if(err) {
                            console.log(err);
                        }
                        else {
                        res.json(data);
                        }
                    })
            },

        findOne: function(req, res){
                    Comment.find({name: req.params.name}, function(err, data){
                        if(err) {
                            console.log(err);
                        }
                        else {
                        res.json(data);
                        }
                    })
            }
    }
})();