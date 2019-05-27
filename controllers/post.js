var {Post} = require('../models');

class PostController {
    constructor(){

    }

    get(req, res, next){
        console.log(req.session);
        res.locals.text = "Hello world";
        Post.find({}).then(results => {
            res.render("index");
        });
    }

}

module.exports = PostController;