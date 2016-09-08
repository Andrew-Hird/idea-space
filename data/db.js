var fs = require('fs')
var path = require('path')

module.exports = {
  getWords: getWords,
  saveWord: saveWord
}

var wordsFile = path.join(__dirname, 'words.json')

function getWords(cb) {
  fs.readFile(wordsFile, function (err, buffer) {
    if (err) {
      return cb(err)
    }
    var wordJson = budffer.toString()
    cb(null, JSON.parse(wordJson))
  })
}

// Method to save a new word
function saveWord(word, callback) {
  fs.readFile(wordsFile, function (err, callback) {
    if (err) {
      return cb(err)
    }

    var words = JSON.parse(buffer)
    word.id = words.length + 1
    words.push(word)
    var jsonString = JSON.stringify(words)

    fs.writeFile(wordsFile, jsonString, function (err) {
      cb(err)
      console.log
    })
  })
}
