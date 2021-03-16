let mongoose = require('mongoose');
let postSchema = new mongoose.Schema({
    Author: String,
    DayCreate: Date,
    Status: String,
    Reply: [{
        Name: String,
        Avatar: String,
        DayComment: Date,
        Comment: String
    }]
})
let post = mongoose.model("Post", postSchema, "posts");

module.exports = post;