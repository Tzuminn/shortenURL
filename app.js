// 載入express及套件
const express = require('express')
const exphbs = require('express-handlebars')

// 載入路由
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// 模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})