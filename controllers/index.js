var PostController = require('./post');
var UserController = require('./user');

const postController = new PostController();
const userController = new UserController();

module.exports =  {
    postController,
    userController
}