var db = require('./data/db')

module.exports = {
  getIndex: getIndex,
  newPost: newPost
}

function getIndex(req, res) {
  res.render('home')
}

function newPost(req, res) {
  var newWord = {
    id: "",
    word: req.body.word
  }
  db.saveWords(newWord, function (err) {
    res.direct('/')
  })
}
