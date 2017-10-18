var Letter = function(char, filler){
	this.letter = char;
	this.display = filler;
};

Letter.prototype.check = function(guess){
	if(guess === this.letter) {
		this.display = guess;
	};
};

module.exports = Letter;