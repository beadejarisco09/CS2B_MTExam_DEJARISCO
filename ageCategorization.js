// Ask the user for their age
let userAge = prompt("Enter your age:");

// Convert the user input from a string to a number
userAge = Number(userAge);

// Declare a variable to hold the user's age category
let category = "";

// Use a conditional (if-else) statement to categorize the user's age
if (userAge < 5) {
  // If age is under 5, the user is a Toddler
  category = "Toddler";
} else if (userAge >= 5 && userAge <= 12) {
  // If age is between 5 and 12, the user is a Child
  category = "Child";
} else if (userAge >= 13 && userAge <= 19) {
  // If age is between 13 and 19, the user is a Teenager
  category = "Teenager";
} else if (userAge >= 20 && userAge <= 25) {
  // If age is between 20 and 25, the user is a Young Adult
  category = "Young Adult";
} else if (userAge >= 36 && userAge <= 60) {
  // If age is between 36 and 60, the user is Middle Aged
  category = "Middle Aged";
} else if (userAge > 60) {
  // If age is over 60, the user is a Senior
  category = "Senior";
} else {
  // This covers ages 26–35, which aren't specified in the instructions
  category = "No category specified (26-35 not included in instructions)";
}

// Log the final category to the console
console.log("You are categorized as: " + category);
