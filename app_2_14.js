// FUNCTION DECLARATIONS & EXPRESSIONS

// FUNCTION DECLARATIONS
function greet(firstName, lastName) {
  // if(typeof firstName === 'undefined){firstName = 'John'}
  // if(typeof lastName === 'undefined){lastName = 'Doe'}
  // console.log("Hello"); // does nothing until called
  return "Hello " + firstName + " " + lastName;
}

console.log(greet("John", "Doe"));
console.log(greet()); // undefined, undefined

function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined){firstName = 'John'}
  // if(typeof lastName === 'undefined){lastName = 'Doe'}
  // console.log("Hello"); // does nothing until called
  return "Hello " + firstName + " " + lastName;
}

console.log(greet("John", "Doe"));

function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined){firstName = 'John'}
  // if(typeof lastName === 'undefined){lastName = 'Doe'}
  // console.log("Hello"); // does nothing until called
  return "Hello " + firstName + " " + lastName;
}

console.log(greet("Steve", "Smith"));

// FUNCTION EXPRESSIONS
const square = function(x) {
  return x * x;
};

console.log(square(8));

const square1 = function(x = 3) {
  return x * x;
};

console.log(square1());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// function that is declared and run at the same time
(function() {
  console.log("IFFE Ran..");
})();

(function(name) {
  console.log("Hello " + name);
})("Shanay");

// PROPERTY METHODS
const todo = {
  add: function() {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
