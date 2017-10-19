var Word = require("./word.js");
var wordList = require("./wordList.js");
var prompt = require("prompt");
// var guess = process.argv[2];

wordList.shuffle();

var keyWord = "This is a test";

var wordObject = new Word(keyWord);

wordObject.splitWord();


prompt.start();
prompt.get("guess", function(error, result) {
	console.log(result.guess);
	wordObject.guessLetter(result.guess);
});