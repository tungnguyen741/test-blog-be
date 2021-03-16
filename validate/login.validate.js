const bcrypt = require('bcrypt-nodejs');
module.exports.postLogin = async function(req, res, next){   
    const userModel = require('../models/user.model');

    const searchListUser = req.body.username;
    const searchListPass = req.body.password;

    try {
        const resultUser = await userModel.findOne({username: searchListUser});
        const checkPass = await bcrypt.compare(searchListPass, resultUser.password);
        if(!resultUser){
            listError.push('Username invalid');
            res.redirect("http://localhost:3000/signin")
            return;
        }
        if(!checkPass){
            res.redirect("http://localhost:3000/signin")
            return;
        }
        
    } catch (error) {
        console.log('error:', error)
    }
    next();
}