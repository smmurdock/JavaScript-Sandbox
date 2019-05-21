// GENERAL LOOPS

// FOR LOOP - good for when you know how many iterations you have
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue; // stops the loop and puts it in place of the 2 and continues to iterate the next loop
  }

  if (i === 5) {
    console.log("Stop the loop");
    break;
  }
  console.log("Number " + i);
}

// WHILE LOOP - good for when you don't know how many iterations you have

let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}

// DO WHILE LOOP - already runs at least once no matter what
let x = 0;

do {
  console.log("Number " + x);
  x++;
} while (x < 10);

// LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let j = 0; j < cars.length; j++) {
//   console.log(cars[j]);
// }

// FOREACH
cars.forEach(function(car, index, array) {
  // suggested for arrays
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Karen" },
  { id: 4, name: "Steve" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// FOR IN LOOP
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`); // gives us the keys
}
