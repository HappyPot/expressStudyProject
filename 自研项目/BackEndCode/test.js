let mysql = require('mysql');
// Authentication 用户登录
// 2.建立连接
let db = mysql.createPool({
  host:'127.0.0.1',  //链接到本机的数据库
  port:'3306',  	   //默认端口号 可省略
  user:'root',	   //用户名
  password:'123456',  //密码
  database:'vueblog'  //链接的数据库名称
});

// // 3.测试建立成功与否
// db.query('select 1',function(err,data){
//   if(err) return console.log('数据库报错啦：',err.message);
//   // 打印查询结果
//   console.log(data);
// })
// 3.测试建立成功与否
db.query('select * from user',function(err,data){
  if(err) return console.log('数据库报错啦：',err.message);
  // 打印查询结果
})