// TYPE CONVERSION

let val;

// Number to String
val = 5;
val = String(5);
val = String(4 + 4);
// Boolean to a String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4]);

// toString() method
val = (5).toString();
val = true.toString();

// String to Number
val = Number("5");

// Number to Boolean
val = Number(true); // gives value of 1
val = Number(false); // gives value of 0
val = Number(null); // gives value of 0
val = Number("Hello"); // gives NaN
val = Number([1, 2, 3]); // gives NaN

// ParseInt

val = parseInt("100"); // parses as integer
val = parseFloat("100.30"); // parses as decimal

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // only works on strings (comes back as undefined as a number)
console.log(val.toFixed()); // number inside toFixed() adds decimal places

// TYPE COERSION
const val1 = "5";
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
