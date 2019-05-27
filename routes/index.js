var express = require('express');
var router = express.Router();
var { postController, userController } = require('../controllers');
var fs = require('fs');

/* GET home page. */
router.get('/', postController.get);
router.get('/login', userController.login);
router.get('/image/:id', async (req, res, next) => {
    let id = req.params.id;
    let file = fs.readFileSync(__dirname + '/../uploads/' + id);
    res.end(file, 'binary');
});

module.exports = router;
