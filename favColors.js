// Create an empty array to store the user's favorite colors
let favoriteColors = [];

// Use a for loop to ask for three colors
for (let i = 0; i < 3; i++) {
  // Prompt the user for a color
  let userColor = prompt("Enter a color you like (Color #" + (i + 1) + "):");
  
  // Add the new color to the array using push()
  favoriteColors.push(userColor);
  
  // Print the updated array of colors to the console
  console.log("Updated color list:", favoriteColors);
}
