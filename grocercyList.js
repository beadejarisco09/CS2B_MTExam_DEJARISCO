// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)");

// Check if the user answered "y" (yes)
if (createList === "y") {
  // Ask how many items the user wants to add
  let numberOfItems = prompt("How many items do you want to add?");
  
  // Convert the user input to a number
  numberOfItems = Number(numberOfItems);
  
  // Create an empty array to store the grocery items
  let groceryList = [];
  
  // Use a for loop to prompt for each item
  for (let i = 0; i < numberOfItems; i++) {
    // Prompt the user for an item
    let item = prompt("Enter item #" + (i + 1) + ":");
    
    // Push the item into the groceryList array
    groceryList.push(item);
  }
  
  // Create a copy of the groceryList and sort it (alphabetically by default)
  let groceryList_Sort = groceryList.slice();
  groceryList_Sort.sort();
  
  // Create another copy of the groceryList and reverse it
  let groceryList_Reverse = groceryList.slice();
  groceryList_Reverse.reverse();
  
  // Show all three lists in a single alert
  alert(
    "Original list: " + groceryList.join(", ") + "\n" +
    "Sorted list: " + groceryList_Sort.join(", ") + "\n" +
    "Reversed list: " + groceryList_Reverse.join(", ")
  );
} else {
  // If the user does not want to create a list, display a message
  alert("No grocery list created.");
}
