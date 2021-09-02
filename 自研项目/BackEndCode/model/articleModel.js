const db = require('./index')

module.exports = {
  insetarticle:async (body)=>{
    let {userId,content} = body
    let sql = 'INSERT INTO article(userid,content,likenum) VALUES (?,?,?)'
    let sqlArr = [userId,content,0]
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