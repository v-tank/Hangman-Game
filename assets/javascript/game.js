var states = ["Alaska",
	    "Alabama",
	    "Arkansas",
	    "American Samoa",
	    "Arizona",
	    "California",
	    "Colorado",
	    "Connecticut",
	    "District of Columbia",
	    "Delaware",
	    "Florida",
	    "Georgia",
	    "Guam",
	    "Hawaii",
	    "Iowa",
	    "Idaho",
	    "Illinois",
	    "Indiana",
	    "Kansas",
	    "Kentucky",
	    "Louisiana",
	    "Massachusetts",
	    "Maryland",
	    "Maine",
	    "Michigan",
	    "Minnesota",
	    "Missouri",
	    "Mississippi",
	    "Montana",
	    "North Carolina",
	    "North Dakota",
	    "Nebraska",
	    "New Hampshire",
	    "New Jersey",
	    "New Mexico",
	    "Nevada",
	    "New York",
	    "Ohio",
	    "Oklahoma",
	    "Oregon",
	    "Pennsylvania",
	    "Puerto Rico",
	    "Rhode Island",
	    "South Carolina",
	    "South Dakota",
	    "Tennessee",
	    "Texas",
	    "Utah",
	    "Virginia",
	    "Virgin Islands",
	    "Vermont",
	    "Washington",
	    "Wisconsin",
	    "West Virginia",
	    "Wyoming"];

    var word;
    var wins = 0;
    var guessesRemaining = 15;
    var guessedLetters = [];
    var dashLetters = [];

    main();

    function main() {
    // randomly pick a state from the array and turns it into lowercase
			generateRandomWord();

			// call function print blanks equivalent to length of the state name
			printBlanks(word.length);

	    // Next, we give JavaScript a function to execute when onkeyup event fires.
	    document.onkeyup = function(event) {
	    	// document.getElementById("game-label").textContent = "Game is on!";
	    	var keyPressed = event.key;

		    if (guessesRemaining === 0) {
		    	return;
		    } 

		    // Checks and only takes valid a-z values
				if (event.keyCode >= 65 && event.keyCode <= 90){
					if ((guessedLetters.indexOf(keyPressed) < 0) && (word.indexOf(keyPressed) < 0)) {
						guessedLetters.push(keyPressed);

						guessesRemaining--;

						renderScreen();
					}
					else if (word.indexOf(keyPressed) >= 0) {
						printLetters(keyPressed);
					}
				}
	    }
  	}

    function renderScreen(){
    	document.getElementById("guesses-remaining-label").textContent = guessesRemaining;
			document.getElementById("letters-guessed-label").textContent = guessedLetters.join(" ");
    	document.getElementById("word-space").textContent = dashLetters.join(" ");

    	if (guessesRemaining == 0) {
    		document.getElementById("game-label").textContent = "Game over!"
    		return;
    	}

    	if (dashLetters.indexOf("_") < 0) {
    		console.log("You got all the letters!");
    		wins++;
    		document.getElementById("wins-label").textContent = wins;
    		resetGame();
    	}
    }

    function generateRandomWord() {
    	word = states[Math.floor(Math.random() * states.length)].toLowerCase();
    	return word;
    }

    function resetGame(){
    	guessesRemaining += 2;
    	guessedLetters = [];
    	dashLetters = [];

    	main();
    	//printBlanks();
    }

    function printLetters(keyPressed) {
    	
    	for (var i=0; i < word.length; i++) {
 				if (word[i] === keyPressed) { 
    			dashLetters[i] = keyPressed.toUpperCase();
    		}
    	}

    	renderScreen();
    }

    function printBlanks(length){
    	for(var i = 0; i < length; i++) {
    		if (word[i] == ' '){
    			dashLetters.push("- ");
    		}
    		else {
    			dashLetters.push("_"); //appends blanks to display on screen
    		}
    	}

    	renderScreen();
    }
