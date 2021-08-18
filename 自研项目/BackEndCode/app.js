const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 3000
const router = require('./router/index')
const errorHandler = require('./middleware/error-handler')
require('./model/index')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/api',router)
app.use(errorHandler())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})