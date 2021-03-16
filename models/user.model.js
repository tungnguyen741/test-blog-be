let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    gender: String,
    avatar: String,
    post: []
})
let users = mongoose.model("Users", userSchema, "users");

module.exports = users;