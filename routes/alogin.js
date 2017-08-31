var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {

  res.render('alogin', { title: '后台登录' });

});

router.post('/',function(req,res){
  console.log(req.body);

});

module.exports = router;
