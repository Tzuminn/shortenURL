// 從all陣列中隨機取出一個值
function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// 取出五位數亂數(大小字母、數字)
function shortUrlGenerator() {

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '0123456789'

  const all = lowerCaseLetters + upperCaseLetters + number

  let newUrl = ''

  for (let i = 1; i <= 5; i++) {
    newUrl += randomIndex(all)
  }

  return newUrl

}
// 匯出函式
module.exports = shortUrlGenerator