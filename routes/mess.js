var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {

  res.render('mess', { title: '问题发布' });

});

router.post('/',function(req,res){
  console.log(req.body);
  var user = new db.question_list(req.body);
  user.save(function(err,resulte){
    assert.equal(null,err);
      res.redirect('/mess');
    });
});

module.exports = router;
