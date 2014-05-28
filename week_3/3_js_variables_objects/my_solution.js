// I paired with Jennie Chamberlin on this challenge.

// __________________________________________
// Write your code below.

//1.
var secretNumber=1;

//2.
var secretNumber=7;

//3.
var password="string";

//4.
password = "just open the door";

//5. 
var allowedIn = true;

//6. 
var allowedIn = false;

//7.
var members = [1, 2, 3];

//8.
members[0] = "John";

//9.
members.push("Mary");


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// We initially had some trouble figuring out what solutions the tests were 
// looking for but once we got started we found it easy to follow. 

// We had some questions about declaring strings and booleans. We searched
// on the web and found helpful info on stackoverflow and w3schoools. I also
// referred to some notes I had from reading the JS Intro from DBC. We used 
// some array methods in our code and it really helped solidify what I had 
// learned. 

// Occasionally, I confuse Ruby and JavaScript methods and properties. To make 
// things even more confusing, I'm also finding myself mixing up Ruby and Java. 
// I think this will be one of the hardest challenges I'll have to face when we 
// start spending more time programming in Ruby. 

// This challenge was especially helpful for me as I prepared for the group
// project. Since I'm Person 1, I'm responsible for writing user stories and
// I found this challenge helpful in determining what kind of information I
// need to include in the user stories. 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

