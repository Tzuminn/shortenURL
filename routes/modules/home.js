const express = require('express')
const router = express.Router()
const ShortenUrl = require('../../models/shortenurl')
const randomUrl = require('../../utilities/randomurl')

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body.fallUrl)
  const newURL = req.body.fallUrl
  // 將使用者輸入的網址放到資料庫fallUrl中配對
  ShortenUrl.findOne({ fallUrl: newURL })
  .then(url => {
  // 資料庫中沒有相同的網址，就產生一筆亂數
    if(url) {
      return url
    }
  // 檢查短網址是否重複
    let shortURL = randomUrl()
    ShortenUrl.findOne({ shortUrl: shortURL })
  // 找不到相同的就直接新增，找到相同的就重新產生一組亂數
      .then(data =>
        data ? shortURL = randomUrl() : data)
    return ShortenUrl.create({ fallUrl: newURL, shortUrl: shortURL })
  })
  .then(url => {
    return res.render('success', { newURL: url.fallUrl, shortURL: url.shortUrl })
   })
  .catch(error => console.log(error))
})

// 開啟縮網址
router.get('/:URL', (req, res) => {
  const URL = req.params.URL
  ShortenUrl.findOne({ shortUrl: URL })
    .lean()
    .then(url => res.redirect(url.fallUrl))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router