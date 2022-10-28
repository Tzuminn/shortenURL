const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortenSchema = new Schema({

 fallUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortenURL', shortenSchema)