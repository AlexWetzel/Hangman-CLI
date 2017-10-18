var Letter = require("./letter.js");

var Word = function(keyWord) {
	this.keyWord = keyWord;
	this.display = "";
	this.letters = [];
	this.printLetters = function() {
		this.display = ""
		for (var i = 0; i < this.letters.length; i++) {
			this.display += this.letters[i].display + " "
		}
		console.log(this.display)
	};
	this.guessLetter = function(guess) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].check(guess);
		}
		this.printLetters();
	};
	this.splitWord = function() {		
		for (var i = 0; i < this.keyWord.length; i++) {
			var char = this.keyWord.charAt(i);
			// console.log(char);
			var filler = "_";

			if (char === " ") {
				filler = " ";
			};
			// console.log(filler)
			var newLetter = new Letter(char, filler);
			this.letters.push(newLetter);
		}		
	};
};

module.exports = Word;