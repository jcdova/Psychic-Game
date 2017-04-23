
// the computer randomly picks a letter
// the user guesses letter
// compare the computer letter and user letter guess and determine if the user wins or loses
// display the result to the user
// when user wins increase the wins counter and start the game over
// when player loses, increase the losses counter and start the game over

  //possible letter options
  var letterOptions = ["a", "b", "c", "d", "e", "d","e", "f", "g","h", "i", "j","k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //setting the intitial wins, losses, guesses, and and empty chosen array
  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var chosen = [];

  // When the user presses a key, it will run the following function
  document.onkeyup = function() {
  // alert("working!");

  // initiates the computerGuess variable to a random choice from the letterOptions array  
  var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
  // console.log(computerGuess);

  // this is function that is run over and over to prevent user error when the user presses a key
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // console.log(userGuess);

  var html = function(){
          document.getElementById("wins").innerHTML="Wins: " + wins;
          document.getElementById("losses").innerHTML ="Losses: "+ losses;
          document.getElementById("guesses").innerHTML  ="Guesses: " + guesses;
          document.getElementById("chosen").innerHTML = "Chosen: " + chosen;
  }
  //this resets guesses to 9 and to an empty array
  var reset = function() {
        guesses = 9;
        chosen = [];
        computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];  
  }

  //add a new element to the chosen array when user presses a letter
  userGuess = event.key;
  chosen.push(userGuess);

      // when user wins increase the wins counter and start the game over
      if (userGuess === computerGuess) {
          reset();
          wins++
          // alert("Wins: " + wins);
          losses = 0;
          guesses = 9;
          chosen = [];
        	} 
          // when player loses, increase the losses counter and start the game over
          else if (userGuess != computerGuess) {
            guesses--;
            // alert("Lose");
              if (guesses === 0) {
                reset();
                losses++
                guesses = 9;
                chosen = [];
              }
          }

    // Here we create the HTML that will be injected into our div and displayed on the page.
  	var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of</p>" + 
  	"<p>Wins: " + wins + "</p>" +
  	"<p>Losses: " + losses + "</p>" +
  	"<p>Guesses Left: " + guesses + "</p>" +
    "<p>Your Guesses so far: " + chosen.join(', ') + "</p>";

  	// Injecting the HTML we just created into our div and updating the game information on our page.
  	document.querySelector('#psychicGame').innerHTML = html;
  }
	