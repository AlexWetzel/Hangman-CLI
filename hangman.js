var guess = process.argv[2]

var wordObject = {
	wordname: "word",
	display: "",
	letterObjects: [
		{letter: "w", display: "_"},
		{letter: "o", display: "_"},
		{letter: "r", display: "_"},
		{letter: "d", display: "_"}
	],
	printLetters: function(){
		this.display = ""
		for (var i = 0; i < this.letterObjects.length; i++) {
			this.display += this.letterObjects[i].display + " "
		}
		console.log(this.display)
	},
	guessLetter: function(guess){
		for (var i = 0; i < this.letterObjects.length; i++) {
			if(guess === this.letterObjects[i].letter) {
				this.letterObjects[i].display = guess
			}
		}
		this.printLetters();
	}
}

wordObject.printLetters()
wordObject.guessLetter(guess)
