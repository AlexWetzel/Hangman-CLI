var wordList = {
	words: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
	shuffle: function() {
		this.words.sort(function(a, b){return 0.5 - Math.random()});
	}
}

module.exports = wordList;