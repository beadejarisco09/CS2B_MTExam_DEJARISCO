// Declare a variable that holds the favorite number
let theFavNumber = 9
  
  ;

// Declare a variable to store the user's guess (initialize to null or any value not equal to theFavNumber)
let userGuess = null;

// Use a while loop that continues until the user guesses the favorite number correctly
while (userGuess !== theFavNumber) {
  // Ask the user for a guess using prompt(), and convert the input to a number
  userGuess = Number(prompt("Guess the favorite number:"));

  // Check if the guess is lower than the favorite number
  if (userGuess < theFavNumber) {
    console.log("Too low! Try again.");
  }
  // Check if the guess is higher than the favorite number
  else if (userGuess > theFavNumber) {
    console.log("Too high! Try again.");
  }
  // Otherwise, the guess must be correct
  else {
    console.log("Correct! You guessed the favorite number.");
  }
}
