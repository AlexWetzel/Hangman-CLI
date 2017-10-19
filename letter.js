var Letter = function(char, filler){
	this.letter = char;
	this.display = filler;
};

Letter.prototype.check = function(guess){
	var check = false;
	if(guess === this.letter) {
		this.display = guess;
		check = true;
	};
	return check;
};

module.exports = Letter;