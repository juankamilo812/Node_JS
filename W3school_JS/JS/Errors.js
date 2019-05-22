//Errors Will Happen!

// try {
//   adddlert ('hola mundo');
// } catch (error) {
// console.log(error.message);
// } ;

//  throw "Too big";   

//Input Validation Example

//  function myfuntion () {
//      let x= "";
//      try {
//          if (x=='') throw "Empty";
//          if (x=='t') throw "test";
//          if(isNaN(x)) throw "not a number";
//          if(x < 5)  throw "too low";
//          if(x > 11)   throw "too high";
//          console.log(x);

//      } catch (error) {
//          console.log('imput is '+ error);

//      }
//  }

//  myfuntion()


//The finally Statement

//  function myfuntion () {
//     let x= 12;
//     try {
//         if (x=='') throw "Empty";
//         if (x=='t') throw "test";
//         if(isNaN(x)) throw "not a number";
//         if(x < 5)  throw "too low";
//         if(x > 11)   throw "too high";
//         console.log(x);

//     } catch (error) {
//         console.log("input " + error);

//     } finally {
//         console.log("El codigo se ejecuto correctamente!!!");

//     }
// }

// myfuntion()

//Range Error
//A RangeError is thrown if you use a number that is outside the range of legal values.

// let num = 1;
// try {
//    num.toPrecision(600);
//     console.log(num);

// } catch (error) {
//     console.log(error.name);

// }

//Reference Error
//A ReferenceError is thrown if you use (reference) a variable that has not been declared:


// var x;
// try {
//     x = y + 1;
//     console.log(z);

// }
// catch (error) {
//     console.log(error.name);

// }

//Syntax Error
//A SyntaxError is thrown if you try to evaluate code with a syntax error.

// try {
//    test ("alert('Hello)");
//    console.log(test);
   
// }
// catch (err) {
//     console.log(err.name);

// } finally {
//     console.log ('Se ejecuto el codigo');
    
// }

//Type Error
//A TypeError is thrown if you use a value that is outside the range of expected types:

var num = 1;
try {
  num.toUpperCase();
  console.log(num);
  
}
catch(err) {
  console.log(err.name);

}

//URI (Uniform Resource Identifier) Error
//A URIError is thrown if you use illegal characters in a URI function:

try {
  decodeURI("%%%");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


