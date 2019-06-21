// //Accidentally Using the Assignment Operator
// var x = 0;
// console.log(Boolean(x == 10));

// var x = 10;
// console.log(Boolean(x == 10));

// var x = 0;
// console.log(Boolean(x == 0));

// //Expecting Loose Comparison

// var x = 10;
// var y = "10";
// console.log(Boolean(x == y));

// var x = 10;
// var y = "10";
// console.log(Boolean(x === y));


// //Misunderstanding Floats
// var x = 0.1;
// var y = 0.2;
// var z = x + y;
// console.log(z);

// //To solve the problem above, it helps to multiply and divide:

// var x = 0.1;
// var y = 0.2;
// var z = (x * 10 + y *10) / 10;
// console.log(z);

// //You must use a "backslash" if you must break a statement in a string:

// console.log("Hello \
// World!");

// //Breaking a Return Statement

// function myFunction(a,b) {
//   var power = 10
//   return a * power + b;
// }
// console.log(myFunction(55,1));

