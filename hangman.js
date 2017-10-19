var Word = require("./word.js");
var wordList = require("./wordList.js");
var prompt = require("prompt");
// var guess = process.argv[2];

wordList.shuffle();

var keyWord = "this is a test";

var wordObject = new Word(keyWord);

wordObject.splitWord();

var turns = 10;

prompt.start();

var game = function() {
	if (turns > 0) {
		console.log("Turns left: " + turns + "| Letters remaining: " + wordObject.letterCount);
		prompt.get("guess", function(error, result) {
			console.log(result.guess);
			var takeTurn = wordObject.guessLetter(result.guess);
			console.log(takeTurn);
			turns -= takeTurn;
			game();
		});		
	}
}

game();
