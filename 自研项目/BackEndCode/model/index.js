const mysql = require('mysql');
const mysqlConfig = require('../config/mysql');
module.exports = {
// const db =  mysql.createPool(mysqlConfig)
// 连接数据库，使用mysql连接池方式连接
sqlConnect:async (sql,sqlArr,callback)=>{
  let  pool = mysql.createPool(mysqlConfig)
  return new Promise((resolve,reject)=>{
  pool.getConnection((err,conn)=>{
    if(err){
      reject(err)
      return 
    }
      // 事件驱动回调
    conn.query(sql,sqlArr,(err,data)=>{
      if(err){
        reject(err)
        return 
      }else{
        resolve(data)
      }
    });
    // 释放连接
    conn.release()
  })
  })
}
}

// Authentication 用户登录
// 2.建立连接

// 3.测试建立成功与否
// db.query('select 1',function(err,data){
//   if(err) return console.log('数据库报错啦：',err.message);
//   // 打印查询结果
//   console.log('连接成功');
// })
// 3.测试建立成功与否
// db.query('select * from user',function(err,data){
//   if(err) return console.log('数据库报错啦：',err.message);
//   // 打印查询结果
// })