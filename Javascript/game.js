		
		


		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var wins = 0;
		var losses = 0;
		var tries = 10;
		var guess = [];
		document.onkeyup = function(event){
			var userGuess = event.key;
			var letter= alphabet[Math.floor(Math.random()* alphabet.length)];
				console.log("made it here");
				if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "t") || (userGuess === "q") || (userGuess === "u") || (userGuess === "r") || (userGuess === "v") || (userGuess === "s") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")){
				if ((tries > 0) && (userGuess!=letter)) {
				tries--;
				//alert("Wrong, Guess again. "+ "Tries left= "+ tries);
				guess.push(userGuess);
				console.log("Try");
				}
				else if (userGuess === letter){
				wins++;
				alert("You win! It was " + letter +"!")
				console.log("Win if else");
				tries = 10;
				guess = [];
				}
				else {
				losses++;
				console.log("loss else");
				alert("No tries left. You lose. I was thinking of " + letter);
				tries = 10;
				guess = [];
				}
		
		var html = "<h1>Psychic game!</h1> <p>Guess what letter I am thinking</p>" +
			"<p> Wins: "+ wins + "</p>" +
			"<p> Losses: "+ losses +"</p>" +
			"<p> Tries left: "+ tries + "</p>"+
			"<p> Guesses so far: "+ guess + "</p>"
			document.querySelector("#heading").innerHTML = html;
		}
		else{ alert("Incorrect input")
			}
		}