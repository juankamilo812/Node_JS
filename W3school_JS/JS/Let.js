//Function Scope
//Variables declared Locally (inside a function) have Function Scope.
// function myFunction() {
//     var carName = "Volvo";
//     console.log(typeof carName + " " + carName);
// }
// console.log(typeof carName);

// myFunction();

//Global Scope
//Variables declared Globally (outside any function) have Global Scope.

// var carName = "Volvo";
// function myFunction() {
//     console.log("I can display " + carName);
// }
// myFunction()


//Redeclaring Variables "var"

// var  x = 10;
// // Here x is 10
// {  
//   var x = 2;
//   // Here x is 2
//   console.log(x);
// }
// // Here x is 2
// console.log(x);
 
//Redeclaring a variable using the let
// var  x = 10;
// // Here x is 10
// {  
//   var x = 2;
//   // Here x is 2
//   console.log(x);
  
// }
// // Here x is 10
// console.log(x);

//Loop Scope Using var in a loop:
//using var, the variable declared in the loop redeclares the variable outside the loop.

// var i = 5;
// for (var i = 0; i < 10; i++) {
//   // some statements
// }
// console.log(i);

//Using let in a loop:
//using let, the variable declared in the loop does not redeclare the variable outside the loop.
// let i = 5;
// for (let i = 0; i < 10; i++) {
//   // some statements
// }
// console.log(i);