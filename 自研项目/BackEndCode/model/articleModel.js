const db = require('./index')

module.exports = {
  insetarticle:async (body)=>{
    let {userId,content,createtime,imageUrl} = body
    let sql = 'INSERT INTO article(userid,content,likenum,createtime,img) VALUES (?,?,?,?,?)'
    let sqlArr = [userId,content,0,createtime,imageUrl]
    let result = db.sqlConnect(sql,sqlArr)
    return result
  },
  // 查找文章
  findArticleList:async (body)=>{
    let {userId} = body
    let sql = 'SELECT * FROM article WHERE userid = ?'
    let sqlArr = [userId]
    let result = db.sqlConnect(sql,sqlArr)
    return result
  },
}