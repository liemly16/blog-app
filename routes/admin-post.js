var express = require('express');
var router = express.Router();
var { Post } = require('../models');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var config = require('../config')

/* GET users listing. */
router.get('/post', async (req, res, next) => {
    res.render('admin-post');
});
router.post('/post', upload.single('thumb'), async function (req, res, next) {
    let post = new Post({
        title: req.body.title,
        content:req.body.content,
        thumb: `${config.host}/image/${req.file.filename}`,
        category: req.body.category
    })
    await post.save();
    res.redirect('/');
});

module.exports = router;
