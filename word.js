var Letter = require("./letter.js");

var Word = function(keyWord) {
	this.keyWord = keyWord;
	this.letterCount = keyWord.length;
	//Variable to hold the display letters that are printed
	this.display = "";
	//Array that holds the letter objects
	this.letters = [];
	//prepares a word to be used for the game
	this.splitWord = function() {
		//Iterates each letter in the word and builds letter objects
		for (var i = 0; i < this.keyWord.length; i++) {
			var char = this.keyWord.charAt(i);
			//Filler is used as a placeholder to hide each letter
			var filler = "_";

			//If the word has spaces, they are displayed
			if (char === " ") {
				filler = " ";
				//Removes spaces from the letter count
				this.letterCount -= 1;
			};
			var newLetter = new Letter(char, filler);
			//Constructed objects are pushed to the letters array
			this.letters.push(newLetter);			
		}
		console.log("\n");
		this.printLetters();	
	};
	//Displays the hangman word
	this.printLetters = function() {
		//The display gets erased to be rebuilt
		this.display = ""
		//Concatenates each letter's display value to the display variable
		for (var i = 0; i < this.letters.length; i++) {
			this.display += this.letters[i].display + " "
		};
		console.log(this.display)
	};
	//Evaluates the player's guess
	this.guessLetter = function(guess) {
		//Variable that may be used to deduct turns and also determine what message to display
		//Defaults to 1. If a guess is correct or has been repeated, the value changes.
		var turnPenalty = 1;
		//Iterates through the array of letter objects and finds any letters that match the guess
		for (var i = 0; i < this.letters.length; i++) {
			//A truth value is returned from the check function
			var isGuessed = this.letters[i].check(guess);
			//When a letter is guessed, the every instance of that letter is deducted from the letter count
			if (isGuessed === true) {
				this.letterCount--
				//Correct guesses don't cost a turn
				turnPenalty = 0;
			};
			//The guess function returns undefined if a guess is repeated
			if (isGuessed === undefined) {
				//The turn penalty gets -1 to be passed to the message function
				turnPenalty = -1;
				this.message(turnPenalty);
				//A value of 0 is returned so that turns are not deducted.
				//Returns as soon as a repeat guess is detected
				return 0;
			};
		};
		this.message(turnPenalty);
		return turnPenalty;
	};
	//Prints a message based on the user's guess
	this.message = function(penalty) {
		//0 penalty means a guess is correct
		if (penalty === 0) {
			console.log("\n\nCorrect!")
		}
		//-1 means a guess is repeated
		else if (penalty === -1) {
			console.log("\n\nYou've guessed that already!");
		}
		//Any other value (expecting 1) means the guess was incorrect
		else {
			console.log("\n\nIncorrect!")
		}
		this.printLetters();
	}
};

module.exports = Word;