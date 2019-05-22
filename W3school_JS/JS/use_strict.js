//Declaring Strict Mode
// "use strict";
// x = 3.14;  // This will cause an error (x is not defined).
// console.log(x);

// use"use strict";
// function use() {
//     y = 3.14;   // This will cause an error (y is not defined)
//     console.log(y);
    
// }
// use ()

// //Declared inside a function, it has local scope 
//(only the code inside the function is in strict mode):

// function myFunction() {
//   "use strict";
//   y = 3.14;  // This will cause an error (y is not defined).
//   x = "3.14";    // This will not cause an error.
//   console.log(x + " " + y);
  
// }
// myFunction()

//Not Allowed in Strict Mode

// "use strict";
//  x = 3.14;  // This will cause an error (x is not defined).
// console.log(x);


//Using an object, without declaring it, is not allowed:

// "use strict";
//  x = {p1:10, p2:20};   // This will cause an error (x is not defined).
// console.log(x);


//Deleting a variable (or object) is not allowed.

// "use strict";
// var x = 3.14;
// delete x;     // This will cause an error 
// console.log(x);


//Deleting a function is not allowed.

// "use strict";
// function x(p1, p2) {}; 
// delete x;        // This will cause an error 
// console.log(x);

//Duplicating a parameter name is not allowed:
// "use strict";
// function x(p1, p1) {};   // This will cause an error 
// console.log(x);

// //Octal numeric literals are not allowed:
// "use strict";
// var x = 010;   // This will cause an error 
// console.log(x);

//Writing to a read-only property is not allowed:
// "use strict";
// var obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});
// obj.x = 3.14;   // This will cause an error
// console.log(obj);

//The string "eval" cannot be used as a variable:

// "use strict";
// var eval = 3.14;   // This will cause an error 
// console.log(eval);

//The string "arguments" cannot be used as a variable:

// "use strict";
// var arguments = 3.14;   // This will cause an error 
// console.log(arguments);

// "use strict";
// var public = 1500;
// console.log(public);
