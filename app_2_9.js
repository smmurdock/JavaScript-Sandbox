// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["apple", "banana", "orange", "pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(mixed);

let val;

// Get array length
val = numbers.length;

// check if something is array
val = Array.isArray(numbers); // true
val = Array.isArray("hello"); // false

// get single value
val = numbers[3]; // put in position within array
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to end (push)
numbers.push(250);
// Add on to front (unshift)
numbers.unshift(120);
// Take off from end (pop)
numbers.pop();
// Take off from front (shift)
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse array
numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);

// Sort arrays
val = fruit.sort(); // alphabetical order
val = numbers.sort(); // sorts based on the first digit of the number

// use "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
