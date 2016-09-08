var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  newWord: newWord,
  deleteWords: deleteWords
}

function getIndex(req, res) {
  db.getWords(function (err, words) {
  })
  res.render('home', wordJson)
}

function newWord(req, res) {
  var newWord = {
    id: "",
    word: req.body.word
  }
  db.saveWord(newWord, function (err) {
    res.direct('/')
  })
}

function deleteWords () {
  
}
