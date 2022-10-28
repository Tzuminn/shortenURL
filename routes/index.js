// 載入 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 載入 home 模組程式碼
const home = require('./modules/home')

// 網址結構符合'/'的request導向home模組 
router.use('/', home)

// 匯出路由器
module.exports = router