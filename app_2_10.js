// OBJECT LITERALS

const person = {
  firstName: "Shanay",
  lastName: "Smith",
  age: 30,
  email: "murdock.shanay@gmail.com",
  hobbies: ["music", "hiking"],
  address: {
    city: "Tallahassee",
    state: "FL"
  },
  getBirthYear: function() {
    return 2019 - this.age; // 'this' is required when you're inside an object because 'age' isn't *defined*; 'this' finds it from inside the object
  }
};

let val;

val = person;
// Get specific value
val = person.firstName; // recommended
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
