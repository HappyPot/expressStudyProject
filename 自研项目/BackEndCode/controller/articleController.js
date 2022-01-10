const db = require('../model/index')
const articleModel = require('../model/articleModel')
const moment  =require('moment')
const fs = require("fs");
const multer = require("multer");
var upload = multer({ dest: 'uploads/' })
// 添加文章
exports.AddArticle = async (req, res, next) => {
  console.log(req.body)
  let obj = {
    userId:req.body.userid,
    content:req.body.content,
    createtime:moment().format('YYYY-MM-DD HH:mm:ss'),
    imageUrl:req.body.imageUrl
  }
  console.log('obj',obj)
  try {
    articleModel.insetarticle(obj).then(async (result)=>{
      console.log(JSON.parse(JSON.stringify(result)))
      res.status(200).json({
        code:200,
        msg:"success",
        data:result
      })
    })
  } catch (err) {
    next(err);
  }
};

// 获取文章
exports.getArticleList = async (req, res, next) => {
  try {
    articleModel.findArticleList({
      userId:req.body.userid,
    }).then(async (result)=>{
      let data = JSON.parse(JSON.stringify(result))
      res.status(200).json({
        code:200,
        msg:"success",
        data:data
      })
    })
  } catch (err) {
    next(err);
  }
};