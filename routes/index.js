var express = require('express');
var router = express.Router();
var { postController, userController } = require('../controllers');

/* GET home page. */
router.get('/', postController.get);
router.get('/login', userController.login);


module.exports = router;
