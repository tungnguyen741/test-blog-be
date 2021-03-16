const userModel = require('../models/user.model')

module.exports.login = async function(req,res){
    var searchListUser = req.body.username;
    try {
        var resultUser = await userModel.findOne({username: searchListUser});
        res.cookie('userCookie', resultUser.id, { signed: true })
        res.redirect('http://localhost:3000/');
    
    } catch (error) {
        console.log('error:', error)
    }
}