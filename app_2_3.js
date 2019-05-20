// var, let, const

// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);
// var and let can be reassigned

// // Initiate a variable (set to undefined)
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // Rules and Conventions
// // letters, numbers, underscore, $
// // Cannot start with number
// // var 1name = 'John'; // invalid or unexpected token
// // try to avoid _varNames because of jQuery and other frameworks
// // multi-word: camelCase
// var firstName = "John"; // Camel Case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case
// var firstname = "Steve"; // not recommended

// LET
// let name;
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
// const name = "John";
// console.log(name);
// name = "Steve"; // error: assignment to constant variable
// have to assign a value
// const greeting; // missing initializer in const declartion

const person = {
  name: "John",
  age: 30
};

person.name = "Sara"; // can change what's inside the object, just can't reassign 'person'
person.age = 32;

console.log(person);

const numbers = [1, 2, 3, 4, 4];
numbers.push(6);

console.log(numbers);

// use const unless you need to initialize it or plan to change it
// it can be mutated as const but not reassigned
