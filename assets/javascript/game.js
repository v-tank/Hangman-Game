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
    var guessesRemaining = 10;
    var guessedLetters = [];
    var dashLetters = [];

    // randomly pick a state from the array and turns it into lowercase
		word = states[Math.floor(Math.random() * states.length)].toLowerCase();

		// call function print blanks equivalent to length of the state name
		printBlanks(word.length);

    //console.log("Hello from the other side......of the event");


    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(event) {

    	var keyPressed = event.key;
    	console.log("Here's what I pressed: " + keyPressed);
	    document.getElementById("game-label").textContent = "Game has begun!"
	    //////////////////////////////////////////////////////////////////////////

	    // Checks and only takes valid a-z values
			if (event.keyCode >= 65 && event.keyCode <= 90){
				if ((guessedLetters.indexOf(keyPressed) < 0) && (word.indexOf(keyPressed) < 0)) {
					guessedLetters.push(keyPressed);
					console.log("Letter is NOT in the word");
					guessesRemaining--;

					document.getElementById("guesses-remaining-label").textContent = guessesRemaining;
					document.getElementById("letters-guessed-label").textContent = guessedLetters;
				}
				else if (word.indexOf(keyPressed) >= 0) {
					var keyIndex = word.indexOf(keyPressed);

					console.log("Word is " + word);
					console.log("Letter is in the word!");
					console.log("Word length is: " + word.length);
					console.log("Length of dashLetters is: " + dashLetters.length);
					console.log("Index of the pressed key in the word is: " + keyIndex);
					printLetters(keyPressed);

				}
			}
    }

    function resetGame(){
    	wins = 0;
    	guessesRemaining = [];
    	guessedLetters = [];
    	dashLetters = [];
    }

    function printLetters(keyPressed) {
    	
    	for (var i=0; i < word.length; i++) {
    		 if (word[i] === keyPressed) { 
    			dashLetters[i] = keyPressed.toUpperCase();
    		}
    	}
    	console.log(dashLetters);
    	document.getElementById("word-space").textContent = dashLetters.join(" ");
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
    	document.getElementById("word-space").textContent = dashLetters.join(" "); // displays blanks on HTML
    }
