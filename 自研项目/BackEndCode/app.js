const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 3000
const router = require('./router/index')
const errorHandler = require('./middleware/error-handler')
const expressJwt = require('express-jwt')
const {jwtSecert} = require('./config/config.default')
const helmet = require('helmet')
require('./model/index')
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(expressJwt({
  secret: jwtSecert,  // 签名的密钥 或 PublicKey
  algorithms:['HS256']
}).unless({
  path: ['/api/users/login', '/api/users']  // 指定路径不经过 Token 解析
}))
app.use('/api',router)
app.use(errorHandler())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})