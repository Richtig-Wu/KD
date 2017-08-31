var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '学生管理系统',info:'学生输入信息',show: '学生信息显示' });
});

module.exports = router;
