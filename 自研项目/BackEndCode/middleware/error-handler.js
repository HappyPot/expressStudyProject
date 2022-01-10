const util = require('util')

module.exports = (err,req,res,next)=>{
  return (err,req,res,next)=>{
    res.status(500).json({
        code:500,
        msg:util.format(err)
    })
  }
}