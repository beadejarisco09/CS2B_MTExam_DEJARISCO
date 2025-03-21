// Code 2
// Ask the user for the Subject Title
let subjectTitle = prompt("Enter the Subject Title (e.g., Mathematics):");

// Ask the user for the Class Schedule (Time, Days)
let classSchedule = prompt("Enter the Class Schedule (e.g., Mon/Wed 10AM-11AM):");

// Ask the user for the Classroom
let classroom = prompt("Enter the Classroom (e.g., Room 101):");

// Ask the user for the Class Instructor's name
let classInstructor = prompt("Enter the Class Instructor's name:");

// Ask the user for the Student's name
let studentName = prompt("Enter the Student's name:");

// Log a final sentence that combines all the collected information
console.log(
  studentName + 
  " is currently enrolled in " + 
  subjectTitle + 
  " with a class schedule of " + 
  classSchedule + 
  " at " + 
  classroom + 
  ". The instructor for the subject is " + 
  classInstructor + 
  "."
);
