var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  newWord: newWord
}

function getIndex(req, res) {
  res.render('home')
}

function newWord(req, res) {
  var newWord = {
    id: "",
    word: req.body.word
  }
  db.saveWords(newWord, function (err) {
    res.direct('/')
  })
}
