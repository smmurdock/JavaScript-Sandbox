// DATES & TIMES

let val;

const today = new Date();
let birthday = new Date("9-10-1981 22:20:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

// val = today;
// val = today.toString(); to convert to string rather than object
val = birthday;

val = today.getMonth(); // 0 based so 4 is May
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(typeof val);
console.log(birthday);
console.log(typeof birthday);
