var fs = require('fs')
var path = require('path')

module.exports = {
  getWords: getWords,
  saveWord: saveWord,
  deleteWords: deleteWords
}

var wordsFile = path.join(__dirname, 'words.json')

// Method to show all current words
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
      console.log(`${word} added to file`)
    })
  })
}

// Method to clear the page of all words
function deleteWords(words, callback) {
  fs.readFile(wordsFile, function (err, callback) {
    if (err) {
      return cb(err)
    }

    var words = Json.parse(buffer)
    words = []
    var jsonString = JSON.stringify(words)

    fs.writeFile(wordsFile, function (err, callback) {
      cb(err)
      console.log("words deleted")
    })
  })
}
