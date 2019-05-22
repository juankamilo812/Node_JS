// //The Boolean() Function
// //You can use the Boolean() function to find out if an expression (or a variable) is true:

// function find() {
//     console.log(Boolean(10 > 9));

// }

// find()

// //Everything Without a "Value" is False
// //The Boolean value of -0 (minus zero) is false:
// //The Boolean value of "" (empty string) is false:
// //The Boolean value of undefined is false:
// //The Boolean value of null is false:
// //The Boolean value of false is (you guessed it) false:

// var x = 0
// function find1() {
//     console.log(Boolean(x));

// }

// find1()

// //The Boolean value of NaN is false:
// var y = 10 / "h";
// function find3() {
//     console.log(Boolean(y));

// }
// find3()

// //Booleans Can be Objects

// let w = false;
// let z = new Boolean (false);
// console.log(typeof w + '\n' + typeof z);


// // Comparison Operators 

// // ==	equal to	x == 8	false	
// // x == 5	true	
// // x == "5"	true	
// // ===	equal value and equal type	x === 5	true	
// // x === "5"	false	
// // !=	not equal	x != 8	true	
// // !==	not equal value or not equal type	x !== 5	false	
// // x !== "5"	true	
// // x !== 8	true	
// // >	greater than	x > 8	false	
// // <	less than	x < 8	true	
// // >=	greater than or equal to	x >= 8	false	
// // <=	less than or equal to	x <= 8	true


//Converting Dates to Strings
// console.log(Date().toString() );

//JavaScript Bitwise AND (&)
//returns 1 only if both bits are 1:
console.log(1 & 1);

//JavaScript Bitwise OR (|)
//returns 1 if one of the bits are 1:
console.log(0 | 1);

//JavaScript Bitwise XOR (^)
// returns 1 if the bits are different:

console.log(1 ^ 0);

//JavaScript Bitwise NOT (~)
console.log(~5);

//JavaScript (Zero Fill) Bitwise Left Shift (<<)
console.log(5 << 1);

//JavaScript (Sign Preserving) Bitwise Right Shift (>>)
console.log(-5 >> 1);

//JavaScript (Zero Fill) Right Shift (>>>)
console.log(5 >>> 1);

//Converting Decimal to Binary

function decimal(dec) {
    return (dec >>> 0).toString(2);

}
console.log(decimal(-5));

decimal()

//Converting Binary to Decimal

function binary(bin) {
    return parseInt (bin,2).toString(10);

}
console.log(binary(101));

binary()