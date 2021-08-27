
const db = require('../model/index')
const userModel = require('../model/userModel')
const {hash,compare} = require('../util/encryption')
const jwt = require('../util/jwt')
const {jwtSecert} = require('../config/config.default')

exports.login = async (req, res, next) => {
  console.log(req.body.name)
  try {
    userModel.findOne({
      column:"name",
      value:req.body.name
    }).then(async (result)=>{
      let data = JSON.parse(JSON.stringify(result))[0]
    if(result.length>0){
        const comresult =  await compare(req.body.password,data.password)
        if(comresult){
          // 处理请求
          const token =  await jwt.sign(
            {
              _id:data.id,
            },
            jwtSecert,
            {
              expiresIn: 30*30
            }
          )
          res.status(200).json({
            code:200,
            msg:"success",
            data:{
              token:'Bearer ' +token,
              id:data.id
            }
          })
        }else{
          res.status(500).json({
            code:500,
            msg:"密码错误",
          })
        }
      
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
    const bcryptPaaword = await hash(password)
    console.log(bcryptPaaword)
    userModel.findOne({
      column:"name",
      value:req.body.name
    }).then((result)=>{
      if(result.length>0){
        res.status(200).json({
          code:200,
          msg:"用户已经存在",
          data:[]
        })
        return
      }
      userModel.insetUser({
        value:{
          name:name,
          password:bcryptPaaword
        }
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
exports.getAllUser = async (req, res, next) => {
  try {
    let token = req.body.token || req.query.token || req.headers['authorization'].split(' ')[1];
    if(token){
      const decoded = await jwt.verify(token,jwtSecert)
      console.log(decoded)
      if (decoded) {
        userModel.findCurrentUser({
          value:decoded['_id']
        }).then(result=>{
          res.status(200).json({
            code:200,
            msg:"success",
            data:result
          })
        })
      }
    }else{
      res.status(401).send('invalid token')
    }

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