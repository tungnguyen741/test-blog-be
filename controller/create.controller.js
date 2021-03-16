const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');

module.exports.createUser = async function(req, res){
    req.body.password = await bcrypt.hash(req.body.password, 10)
    userModel.create(req.body);
    res.redirect("http://localhost:3000/signin")
}