var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function() {
    return {

        new: function(req, res){
                    Post.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
            },

        index: function(req, res){
                    Post.find({}, function(err, data){
                        if(err) {
                            console.log(err);
                        }
                        else {
                        res.json(data);
                        }
                    })
               },

        findOne: function(req, res){
                    Post.find({name: req.params.name}, function(err, data){
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