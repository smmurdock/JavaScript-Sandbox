// **Primitive Data Types**
// Stored directly in the location the variable accesses
// Stored on the stack

// string, number (float, decimal), boolean, null (intentional empty value), undefined (variable that hasn't been assigned a value), symbols (ES6)

// --------------------------------

// **Reference Data Types**
// Accessed by reference
// Objects that are stored on the heap (dynamically allocated memory)
// A pointer to a location in memory

// Arrays, object literals, functions, dates, anything else...

// --------------------------------

// Dynamically Typed Language
// Types are associated with values, not variables
// The same variable can hold multiple types
// We do not need to specify types
// Most other languages are statically typed (Java, C#, C++)
// There are supersets of JS and add-ons that allow static typing (TypeScript, Flow)

// --------------------------------

// PRIMITIVE
// string
const name = "John Doe";
console.log(typeof name);

// number
const age = 45;
console.log(typeof age);

// boolean
const hasKids = true;
console.log(typeof hasKids);

// null
const car = null;
console.log(typeof car); // shows as object which is somewhat of a bug in JS

// undefined
let test;
console.log(typeof test);

// symbol
const sym = Symbol();
console.log(typeof sym);

// --------------------------------

// REFERENCE TYPES - Objects
// Array
const hobbies = ["movies", "music"];
console.log(typeof hobbies);

// Object literal
const address = {
  city: "Tallahassee",
  state: "Florida"
};
console.log(typeof address);

// date
const today = new Date();
console.log(today);
console.log(typeof today);
