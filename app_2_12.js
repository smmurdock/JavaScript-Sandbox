// IF STATEMENTS & COMPARISON OPERATORS

// if(something) {
//   do something
// } else {
//   do something else
// }

// = assigning
// == comparing
// === strict comparing

const id = 100;

// EQUAL TO (tests value but not type)
if (id == 100) {
  console.log("CORRECT");
}

// if (id == 101) {
//   console.log("CORRECT");
// } // nothing happens in the console because nothing is assigned to output in the event of a false comparison

if (id == 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// NOT EQUAL TO (tests value but not type)
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// STRICT EQUAL TO (value and type)
if (id === 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT"); // shows as incorrect because string and number are not equivalent
}

// STRICT EQUAL TO (tests value and type)
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Test if undefined
if (typeof id !== "undefined") {
  // use typeof in order to check to see if the variable is defined first
  console.log(`The ID is ${id}`);
} else {
  console.log("No ID");
}

// Test GREATER THAN or LESS THAN
if (id > 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
if (id < 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
if (id >= 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
if (id <= 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// IF ELSE
const color = "yellow";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

// LOGICAL OPERATORS
const name = "Steve";
const age = 20;

// And &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age < 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// WITHOUT CURLY BRACES
if (id === 100) console.log("CORRECT");
// optional but not advised
else console.log("INCORRECT");
