/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task 1
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

console.log('test3 is false. res:', test3)

// Task 2
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

var test4 = 0 === "";
var test5 = 1 == "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task 3
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x;

var q = z - x;

var r = y - w;

console.log('p val:', p);
console.log('q val:', q);
console.log('r val:', r);

console.log('floating point arithmetic is the issue: https://stackoverflow.com/questions/10713878/decimal-subtraction-problems-in-javascript')