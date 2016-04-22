var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function() {
    return {

        new: function(req, res) {
            console.log(req.body.userId);
            var topic = {
                topic_title: req.body.topic_title,
                description: req.body.description,
                Category: req.body.Category,
                _user: req.body.userId
            }

            Topic.create(topic, function(err, newTopic) {
                User.findOneAndUpdate({_id: req.body.userId}, {$push:{'topics': newTopic._id}}).exec(function(err, user) {
                    if(err){
                        console.log(err);
                    }
                    else {
                        res.json(newTopic);
                    }
                })
            })

            },

        index: function(req, res) {
            Topic.find({}).populate('_user ').exec(function(err, data) {
                console.log(data)
                if(err) {
                    console.log(err);
                }
                else{
                    res.json(data);
                }
            })
        },
              
            

        // index: function(req, res){
        //             Topic.find({}, function(err, data){
        //                 if(err) {
        //                     console.log(err);
        //                 }
        //                 else {
        //                 res.json(data);
        //                 }
        //             })
        //     },

        findOne: function(req, res){
            console.log(req.params.id)
                Topic.find({_id: req.params.id}, function(err, data){
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