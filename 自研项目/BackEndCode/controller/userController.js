
const db = require('../model/index')
exports.login = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /users/login");
  } catch (err) {
    next(err);
  }
};
// 查询是否存在
async function checkExist(obj){
  let sql = 'select name from user where name = ?'
  let sqlArr = [obj.name]
  let val = await db.sqlConnect(sql,sqlArr)
  return val.length
} 
// Registration 用户注册
exports.register = async (req, res, next) => {
  try {
    let {name,password} = req.body
    if(checkExist(req.body)){
      res.status(200).json({
        code:200,
        msg:"用户已经存在",
        data:[]
      })
      return
    }
    let sql = 'INSERT INTO user(name,password,status,create_time) VALUES (?,?,?,?)'
    let sqlArr = [name,password,status,(new Date().valueOf())]
    db.sqlConnect(sql,sqlArr).then(res=>{
      res.status(200).json({
        data:data
      })
    }).catch(err=>{
      console.log(err)
      console.log("连接报错了")
    })
    // 处理请求
  } catch (err) {
    next(err);
  }
};

// Get Current User 获取当前登录用户
exports.getAllUser = (req, res, next) => {
  try {
    var sql = 'select * from user'
    var sqlArr = []
    var callbacck = (err,data)=>{
      if(err){
        console.log("连接报错了")
      }else{
        res.send({
          data:data
        })
      }
    }
    db.sqlConnect(sql,sqlArr,callbacck)
  } catch (err) {
    next(err);
  }
};

exports.getUserById = (req, res, next) => {
  try {
    var sql = 'select * from user where id = ?'
    var sqlArr = [req.param.id]
    var callbacck = (err,data)=>{
      if(err){
        console.log("连接报错了")
      }else{
        res.send({
          data:data
        })
      }
    }
    db.sqlConnect(sql,sqlArr,callbacck)
  } catch (err) {
    next(err);
  }
};

// Update User 更新用户
exports.updateUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /user");
  } catch (err) {
    next(err);
  }
};