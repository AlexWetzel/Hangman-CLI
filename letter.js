//The Letter objects contain a letter and display variable
var Letter = function(char, filler){
	this.letter = char;
	//The filler is what gets displayed
	this.display = filler;
};
//Function prototype that checks the player's guess against the letter and returns a value
Letter.prototype.check = function(guess){
	//If the guess has been guessed already, returns 'undefined'
	if (guess === this.display) {
		return undefined
	}
	//If the guess matches a letter, the display is changed to the letter. Returns 'true'
	else if (guess === this.letter) {
		this.display = guess;
		return true;
	};
	//Returns 'false' if the guess doesn't match
	return false
	
};

module.exports = Letter;