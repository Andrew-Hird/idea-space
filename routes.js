var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  newWord: newWord,
  deleteWords: deleteWords
}

function getIndex(req, res) {
  db.getWords(function (err, words) {
    var vm = {
      words: words
    }
    res.render('home', vm)
  })
}

function newWord(req, res) {
  var newWord = {
    id: "",
    word: req.body.word
  }
  db.saveWord(newWord, function (err) {
    res.redirect('/')
  })
}

function deleteWords () {

}
