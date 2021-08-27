const bcrypt = require('bcrypt');
exports.hash = (myPlaintextPassword) => {
  return new Promise((resolve, reject) => {
  //第二个参数是盐
      bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
          if(err){
              reject(err)
          }else{
          //成功则返回加密后的hash值
              resolve(hash)
          }
      })
  })
}

exports.compare=(myPlaintextPassword,hash)=>{
  return new Promise((resolve,reject)=>{
      bcrypt.compare(myPlaintextPassword,hash,(err,result)=>{
          if(err){
              reject(err)
          }else{
              resolve(result)
          }
      })
  })
}