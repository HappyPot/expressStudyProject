const db = require('../model/index')
const articleModel = require('../model/articleModel')


// 添加文章
exports.AddArticle = async (req, res, next) => {
  console.log(req.body)
  try {
    articleModel.insetarticle({
      userId:req.body.userid,
      content:req.body.content,
    }).then(async (result)=>{
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