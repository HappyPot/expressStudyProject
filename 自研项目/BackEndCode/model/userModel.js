const db = require('./index')

module.exports = {
  // 查找一条信息
  findOne:async (body)=>{
    let column = body.column
    let name = body.value
    let sql = `select ${column} from user where name = ?`
    let sqlArr = [name]
    let val = await db.sqlConnect(sql,sqlArr)
    return val.length
  },
  insetUser:async (body)=>{
    let {name,password} = body.value
    let sql = 'INSERT INTO user(name,password,status,create_time) VALUES (?,?,?,?)'
    let sqlArr = [name,password,1,(new Date().valueOf())]
    let result = db.sqlConnect(sql,sqlArr)
    return result
  },
}