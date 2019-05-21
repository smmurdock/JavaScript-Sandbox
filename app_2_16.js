// A LOOK AT THE WINDOW OBJECT
// window object is the global client side object

// WINDOW METHODS / OBJECTS / PROPERTIES

//window.console.log(123);

// ALERT
// alert("Hello World");

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM - used often for deleting something
// if (confirm("Are you sure?")) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

let val;

// OUTER HEIGHT AND WIDTH
// val = window.outerHeight;
// val = window.outerWidth;

// INNER HEIGHT AND WIDTH
// val = window.innerHeight;
// val = window.innerWidth;

// SCROLL POINTS
// val = window.scrollY;
// val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
// window.location.href = "http://google.com";
// RELOAD
// window.location.reload();

// HISTORY OBJECT
// window.history.go(-2); // will revert however many pages back you input
// val = window.history.length; // shows history of browsing session

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
