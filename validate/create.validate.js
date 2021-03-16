module.exports.postCreate = async function(req, res, next){ 
    const userModel = require('../models/user.model');

    const listError = [];
    const errorUser = [];

    const email = req.body.email;
    const username = req.body.username;
    const pass = req.body.password;
    try {
    
        const resultUser = await userModel.findOne({username: username});
        if(resultUser){
            errorUser.push('Username exists');
        }
        
        if(!username){
            listError.push('Please enter username');
        }
        if(!pass){
            listError.push('Please enter password');
        }
        if(!email){
            listError.push('Please enter email');
        }
               
        if(listError.length){
            res.redirect("http://localhost:3000/create")
            return;
        }
        else if(errorUser.length){
            res.redirect("http://localhost:3000/create")
            return;
        }
        
    } catch (error) {
      console.log('error:', error)
    }
    next();
}