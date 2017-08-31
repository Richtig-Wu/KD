var mongoose = require('mongoose');//引入模块
var url = 'mongodb://10.198.1.213:27017/KD';
mongoose.connect(url);//链接数据库
//获取文件句柄
var db = mongoose.connection;
//获取文件的错误信息
db.on('error',() =>{
  console.log('Connect error');
});
//打开数据库成功
db.open('open', () =>{
  console.log('mongoose working!!!');
});

//创建集合的文档类型
var Schema = mongoose.Schema;
//用户信息
var userSchema = new Schema({
  user_id : String, //用户名
  name : String, //姓名
  sex : String, //性别number
  password : String, //密码
  email : String, //邮箱
  phone : Number, //电话
  profile : String, //个人简历
  problem : String, //密码问题
  answer : String //密保答案
});

//提问列表
var userquestion = new Schema({
  user_id : String, //用户名
  user_quiz : String, //提出的问题
  user_time : { type : Date, default: new Date()} //提问的时间
});

//问题的详情
var userproblem = new Schema({
  user_id : String, //提问用户名
  users_id : String, //回答用户名
  content : String, //回答内容
  time : { type : Date, default: new Date()} //回答时间
});

//管理员
var useradmin = new Schema({
  admin_id : String, //管理员账号
  password : String, //管理员密码
  jurl : { type : Number, default: 1} //管理权限
});

//链接集合
var User = mongoose.model('User',userSchema);
//创建一个user模块
module.exports.user = User;

//链接集合
var Question_list = mongoose.model('Question_list',userquestion);
//创建一个question_list模块
module.exports.question_list = Question_list;

//链接集合
var Problem_details = mongoose.model('Problem_details',userproblem);
//创建一个problem_details模块
module.exports.problem_details = Problem_details;

//链接集合
var Admin = mongoose.model('Admin',useradmin);
//创建一个admin模块
module.exports.admin = Admin;
