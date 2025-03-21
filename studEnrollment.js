// Create three separate arrays to store enrolled students for each subject
let dsaStudents = [];
let webdevStudents = [];
let operationsStudents = [];

// A variable to track if the user wants to exit the entire program
let exitProgram = false;

// Start a loop that runs until the user chooses to exit
while (!exitProgram) {
  // Ask the user which subject they want to manage
  let subjectChoice = prompt(
    "Select a subject:\n" +
    "A) DSA\n" +
    "B) WebDev\n" +
    "C) Operations\n" +
    "D) Exit"
  );

  // If the user chooses D (Exit), we break out of the loop
  if (subjectChoice === "D") {
    exitProgram = true;
    break;
  }

  // We will store a reference to the chosen array of students
  let chosenArray = null;
  // We also keep a subject name for display
  let chosenName = "";

  // Decide which subject array to use based on user input
  if (subjectChoice === "A") {
    chosenArray = dsaStudents;
    chosenName = "DSA";
  } else if (subjectChoice === "B") {
    chosenArray = webdevStudents;
    chosenName = "WebDev";
  } else if (subjectChoice === "C") {
    chosenArray = operationsStudents;
    chosenName = "Operations";
  } else {
    // If user typed something else, just continue to the next iteration
    alert("Invalid choice. Please try again.");
    continue;
  }

  // Now we enter another loop to perform operations (Enroll, Unenroll, etc.)
  let returnToSubjects = false;

  while (!returnToSubjects && !exitProgram) {
    // Prompt the user for the next operation
    let operationChoice = prompt(
      "You selected " + chosenName + ". What would you like to do?\n" +
      "A) Enroll a student\n" +
      "B) Unenroll a student\n" +
      "C) Return to subjects\n" +
      "D) Exit"
    );

    // Check the user's choice
    if (operationChoice === "A") {
      // Enroll: prompt for a student name and push it to the chosen array
      let studentToEnroll = prompt("Enter the student's name to ENROLL in " + chosenName + ":");
      chosenArray.push(studentToEnroll);
      console.log(studentToEnroll + " has been enrolled in " + chosenName + ".");
      alert(studentToEnroll + " has been enrolled in " + chosenName + ".");
    } 
    else if (operationChoice === "B") {
      // Unenroll: prompt for a student name and remove it from the chosen array if it exists
      let studentToUnenroll = prompt("Enter the student's name to UNENROLL from " + chosenName + ":");
      
      // Find the index of that student in the array
      let index = chosenArray.indexOf(studentToUnenroll);
      
      if (index !== -1) {
        // If found, remove the student from the array
        chosenArray.splice(index, 1);
        console.log(studentToUnenroll + " has been unenrolled from " + chosenName + ".");
        alert(studentToUnenroll + " has been unenrolled from " + chosenName + ".");
      } else {
        // If not found, notify the user
        console.log("Student not found in " + chosenName + ".");
        alert("Student not found in " + chosenName + ".");
      }
    } 
    else if (operationChoice === "C") {
      // Return to subject selection
      returnToSubjects = true;
    } 
    else if (operationChoice === "D") {
      // Exit the program entirely
      exitProgram = true;
    } 
    else {
      // Invalid choice
      alert("Invalid choice. Please try again.");
    }
  }
}

// Once the user chooses to exit, display the final list of enrolled students for each subject
alert(
  "Final Enrolled Students:\n\n" +
  "DSA: " + dsaStudents.join(", ") + "\n" +
  "WebDev: " + webdevStudents.join(", ") + "\n" +
  "Operations: " + operationsStudents.join(", ")
);
