var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function() {
    return {

        new: function(req, res){
                    Answer.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
            },

        index: function(req, res){
                    Answer.find({}, function(err, data){
                        if(err) {
                            console.log(err);
                        }
                        else {
                        res.json(data);
                        }
                    })
               },


//     //     likes: function(req, res) {
//     //         console.log(req.body)
//     //         Answer.update({like: req.body.like}, {$inc: {qty:-req.body.ulike}}, function (err, data) {
//     //             if(err) {
//     //                 console.log(err);
//     //             }
//     //             else {
//     //                 res.json(true);
//     //             }
//     //         })
//     //     }
    }
})();