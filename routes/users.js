var express = require('express');
var router = express.Router();
var { User } = require('../models');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  req.session.user  = "Test";
  res.json(req.session);
});

module.exports = router;
