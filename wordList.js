//Object that contains an array of words to be used in the game, and a function that randomizes the word order
var wordList = {
	words: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
	shuffle: function() {
		this.words.sort(function(a, b){return 0.5 - Math.random()});
	}
};

module.exports = wordList;