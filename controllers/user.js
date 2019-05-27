var {User} = require('../models');

class UserController {
    constructor(){

    }

    login(req, res, next){
       res.render('login');
    }

}

module.exports = UserController;