var db = require('./data/db')
var fs = require('fs')
var path = require('path')

module.exports = {
    getIndex: getIndex,
    newWord: newWord,
    deleteW: deleteW
}
var wordsFile = path.join(__dirname, 'words.json')

function getIndex(req, res) {
    db.getWords(function(err, words) {
        var vm = {
            words: words
        }
        res.render('home', vm)
    })
}

function newWord(req, res) {
    var newWord = {
        id: "",
        layout_id: "",
        word: req.body.word
    }
    db.saveWord(newWord, function(err) {
        if (err) {
            console.error(err.message)
        }
        res.redirect('/')
    })
}

function deleteW(req, res) {
    db.deleteWords(wordsFile, function(err) {
        res.redirect('/')
    })
}
