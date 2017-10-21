var Word = require("./word.js");
var wordList = require("./wordList.js");
var prompt = require("prompt");

//shuffles the word list array in wordList.js
wordList.shuffle();

//Nuber of incorrect guesses before you lose
var turns = 10;
//counter that iterates through the word list array
var wordNum = 0;
//Construsts an object from the first word in the word list array
var newWord = new Word(wordList.words[wordNum]);

prompt.start();

console.log("\n\nPress a letter key to enter your guess\n");
//Prepares the selected word for the game
newWord.splitWord();

var round = function() {
	//when the player still has turns and there are letters left, the player may guess letters
	if (turns > 0 && newWord.letterCount > 0) {

		console.log("Turns left: " + turns + " | Letters remaining: " + newWord.letterCount);
		//Prompts the user for a guess
		prompt.get("guess", function(error, result) {
			//Determines the turn penalty from the result of the guess
			var turnCost = newWord.guessLetter(result.guess);
			turns -= turnCost;
			round();
		});		
	}
	else {
		//After the round, then the last word has been used, the game ends
		if (wordNum === wordList.words.length - 1){
			console.log("No more words left. Thank you for playing!")
			return
		}
		//If there are words left, prompts the player to play another round
		else {
			console.log("Play another round? (true/false)")
			//Object to be passed into prompt
			var schema = {
				properties: {
					confirm: {
						type: "boolean",
						required: "true",
						message: "Must be true or false"
					}
				}
			};
			prompt.get(schema, function(error, result) {
				//On confirmation, the turns are reset and the next word in the list is prepared
				if (result.confirm) {
					turns = 10;
					wordNum++;
					newWord = new Word(wordList.words[wordNum]);
					newWord.splitWord();
					round();
				}
			});
		}
	}
}

//Calls the round function to start the game
round();