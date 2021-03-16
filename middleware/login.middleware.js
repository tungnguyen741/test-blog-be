module.exports.login = async function(req, res, next){
    var userModel = require('../models/user.model');
    var cookieId = req.signedCookies.userCookie;
    if(!cookieId){
        res.redirect("http://localhost:3000/signin")
        return;
    }
    try {
        var userLocals = await userModel.findOne({"_id": cookieId});
        if(!userLocals){
            res.redirect("http://localhost:3000/signin")
            return;
        }
        res.locals.userLocals = userLocals;
        next()
    } catch (error) {
      console.log('error:', error)
    }
    
}