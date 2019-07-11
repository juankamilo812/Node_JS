// //Function Expressions
// var x = function (a, b) { return a * b };
// console.log(x(4, 3));

// //The Function() Constructor

// var myFunction = new Function("a", "b", "return a * b");
// console.log(myFunction(10, 3));

// var myFunction = function (a, b) { return a * b }
// console.log(myFunction(10, 3));

// //Self-Invoking Functions

// (function () {
//     console.log("Hello! I called myself");

// })();

// //JavaScript functions can be used in expressions:
// function myFunction(a, b) {
//     return a * b;
//   }
//   var x = myFunction(12, 4);
//   console.log(x);

//JavaScript functions can be used in expressions:

//   function myFunction(a, b) {
//     return a * b;
//   }
//   var x = myFunction(4, 3) * 2;
//   console.log(x);


//Functions are Objects


// function myFunction(a, b, c) {
//     return arguments.length;
//   }
//   console.log(myFunction(4, 3 , 10));

//Arrow Functions
// const x = (x, y) => x * y;
// console.log(x(5, 5));


//Parameter Defaults

// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 0;
//   }  
//   return x * y;
// }
// document.getElementById("demo").innerHTML = myFunction(4);

//The Arguments Object

// function findMax() {
//   var i;
//   var max = -Infinity;
//   for(i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// } 
// console.log(findMax(4, 5, 6));

//Or create a function to sum all input values:

// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   var i;
//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAll(1, 2, 3, 4, 1, 1));

//Invoking a Function as a Function

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(10, 2));

// function myFunction(a, b) {
//   return a * b;
// }
// document.getElementById("demo").innerHTML = window.myFunction(10, 2); 

//The Global Object

// var x = myFunction();
// function myFunction() {
//   return this;
// }
// console.log(x);

// var myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   // fullName: function() {
//   //   return this.firstName + " " + this.lastName;
//   fullName: function() {
//     return this;
//   }
// }
// console.log( myObject.fullName());

//Invoking a Function with a Function Constructor

// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }
// var x = new myFunction("John","Doe")
// console.log(x.firstName,x.lastName);

//All Functions are Methods

// var myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// x = myObject.fullName();
// //console.log(myObject.fullName());
// console.log(x);


//The JavaScript call() Method
// var person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// var person2 = {
//   firstName:"Mary",
//   lastName: "Daza"
// }
// //var x = person.fullName.call(person2); 
// console.log(person.fullName.call(person2));


//The call() Method with Arguments

// var person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }
// var person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// var person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }
// var x = person.fullName.call(person1, "Oslo", "Norway"); 
// console.log(x);

//The JavaScript apply() Method

// var person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var person1 = {
//   firstName:"Juan",
//   lastName: "Camilo"
// }
// var x = person.fullName.apply(person1); 
// console.log(x);

//The apply() Method with Arguments

// var person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }
// var person1 = {
//   firstName: "John",
//   lastName: "Doe"
// }
// var x = person.fullName.apply(person1, ["Oslo", "Norway"]);
// console.log(x);

// //Simulate a Max Method on Arrays
// console.log(Math.max(1, 2, 3));
// console.log(Math.max.apply(null, [1, 2, 6]));
// console.log(Math.max.apply(Math, [1, 2, 9]));
// console.log(Math.max.apply(" ", [1, 32, 20]));
// console.log(Math.max.apply(0, [1, 58, 3]));

// Global Variables
// function myFunction() {
//   var a = 4;
//   console.log(a * a);
// }
// myFunction()

// var a = 5;
// function myFunction1() {
//   console.log(a * a);
// } 
// myFunction1()

//A Counter Dilemma

// var counter = 1;

// // Function to increment counter
// function add() {
//   counter += 2;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3
// console.log(counter);


//The counter should be local to the add() function, to prevent other code from changing it:

// Initiate counter
var counter = 1;

// Function to increment counter
// function add() {
//   var counter = 0; 
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The result is not 3 because you mix up the globaland local counter
// console.log("This conuter is " + counter);

//We can remove the global counter and access the local counter by letting the function return it:

// Function to increment counter
// function add() {
//   //var counter = 0;
//   counter += 1;
//   return counter;
// }
// // Trying to increment the counter
// function myFunction() {
//   console.log(add());
// }

// add()


// Function to increment counter
// function add() {
//   var counter = 0;
//   counter += 1;
//   return counter;
// }
// // Trying to increment the counter
// function myFunction(){
//   console.log(add());
//    ;
// }
// add ()

//JavaScript Nested Functions


// function add() {
//   var counter = 1;
//   function plus() {counter += 2;}
//   plus();  
//   return counter; 
// }

// console.log(add());
 
//JavaScript Closures
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  console.log(add());
   
}

myFunction()