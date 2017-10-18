var Word = require("./word.js");

var guess = process.argv[2];

var keyWord = "this is a word"; 

var wordObject = new Word(keyWord);

wordObject.splitWord();
wordObject.printLetters()
wordObject.guessLetter(guess)

console.log()
