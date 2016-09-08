var fs = require('fs')
var path = require('path')

module.exports = {
  getWords: getWords,
  saveWord: saveWord,
  deleteWords: deleteWords
}

var wordsFile = path.join(__dirname, 'words.json')

// Method to show all current words
function getWords(callback) {
  fs.readFile(wordsFile, function (err, buffer) {
    if (err) {
      return callback(err)
    }
    var wordJson = buffer.toString()
    callback(null, JSON.parse(wordJson))
  })
}

// Method to save a new word
function saveWord(word, callback) {
  fs.readFile(wordsFile, function (err, data) {
    if (err) {
      return callback(err)
    }

    var words = JSON.parse(data)
    word.id = words.length + 1
    words.push(word)
    var jsonString = JSON.stringify(words)

    fs.writeFile(wordsFile, jsonString, function (err) {
      callback(err)
      console.log(`${word} added to file`)
    })
  })
}

// Method to clear the page of all words
function deleteWords(words, callback) {
  fs.readFile(wordsFile, function (err, data) {
    if (err) {
      return callback(err)
    }

    var words = JSON.parse(data)
    words = []
    var jsonString = JSON.stringify(words)

    fs.writeFile(wordsFile, jsonString, function (err) {
      callback(err)
      console.log("words deleted")
    })
  })
}
