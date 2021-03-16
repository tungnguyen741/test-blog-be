const postModel = require('../models/post.model')

module.exports.post = async function(req, res){
    let posts = await postModel.find();
    console.log(posts)
    return res.json(posts)
}