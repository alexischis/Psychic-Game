// computer can choose any letter from the alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// set up the numeric variables for the game
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// computer can choose any letter from the alphabet at random
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// documenting what letter the computer chooses in the console log
console.log(computerGuess);

// reset function to allow the computer to choose a different letter when the time comes
function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('reset', computerGuess);
}

// user can select a letter using their keyboard, the game starts when a key is pushed
document.onkeyup = function (event) {
    var userGuess = event.key;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// setting up possible key choices for the user, the game will not accept a number
    if (options.indexOf(userGuess) > -1) {

// if the user selects the same letter as the computer then the user earns a point
// guesses and choices are reset
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
            
        }

// if the user choices a letter that is not the same as the computer then the number of guesses goes down
// and the letter chosen will appear on the screen
        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

// if the number of guesses left goes down to zero then the users losses increase by 1
//  the guess and choices are reset
        if (numGuesses === 0) {
            numGuesses = 9;
            losses++;
            guessChoices = [];
        }

// when the guesses are reset to nine the computers choice is also reset
        if (numGuesses === 9) {
            reset();
        }

// linking in the html text and adding the variables
        var html =
            "<h1> Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Press any letter to see if you're right.</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;

    }
};
