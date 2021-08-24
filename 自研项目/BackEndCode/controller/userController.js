
const db = require('../model/index')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')
exports.login = async (req, res, next) => {
  try {
    userModel.findOne({
      column:"name",
      value:req.body.name
    }).then((result)=>{
      if(!result){
        // 处理请求
        const token = 'Bearer ' + jwt.sign(
          {
            name: req.body.name,
          },
          '2100796e-5472-40ae-bb25-2f4a487e6388',
          {
            expiresIn: 3600 * 24 * 3
          }
        )
        res.status(200).json({
          code:200,
          msg:"success",
          data:{ token: token }
        })
      }else{
        res.status(500).json({
          code:500,
          msg:"用户不存在",
        })
      }
    })
  } catch (err) {
    next(err);
  }
};

// Registration 用户注册
exports.register = async (req, res, next) => {
  try {
    let {name,password} = req.body
    userModel.findOne({
      column:"name",
      value:req.body.name
    }).then((result)=>{
      if(result){
        res.status(200).json({
          code:200,
          msg:"用户已经存在",
          data:[]
        })
        return
      }
      userModel.insetUser({
        value:req.body
      }).then(data=>{
        res.status(200).json({
          code:200,
          msg:"success",
          data:data
        })
      }).catch(err=>{
        console.log(err)
      })
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