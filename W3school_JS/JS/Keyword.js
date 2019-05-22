// //The JavaScript this Keyword
// //this in a Method
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());


//[object Window]

// //this Alone
// "use strict";
// var x = this;
// console.log(x);

//this in a Function (Strict)
// "use strict";
// function myFunction() {
//   return this;
// }
// console.log(myFunction());

//Object Method Binding
// var person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id     : 5566,
//     myFunction : function() {
//       return this;
//     }
// };
// console.log(person.myFunction());

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id     : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());


//Explicit Function Binding

// var person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   var person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
//   var x = person1.fullName.call(person2); 
// console.log(x);
