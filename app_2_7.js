// STRING METHODS & CONCATENATION

const firstName = "Shanay";
const lastName = "Murdock";
const age = 29;
const str = "Hello there my name is Shanay";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Shanay ";
val += "Murdock";

val = "Hello, my name is " + firstName + " and I am " + age + ".";

// Escaping
val = "That's awesome, I can't wait.";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[2];

// indexOf();
val = firstName.indexOf("n");
val = firstName.lastIndexOf("a");

// charAt();
val = firstName.charAt("1");
// get last character of string
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(1, 5);
val = firstName.slice(-3); // starts from back and takes the number

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Shanay", "Brad");

// includes()
val = str.includes("Hello");

val = console.log(val);
