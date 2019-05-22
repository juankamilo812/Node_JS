//JavaScript Math Object
console.log(Math.PI);

//Math.round() 
//returns the value of x rounded to its nearest integer:
console.log(Math.round(4.8));


//Math.pow()
// returns the value of x to the power of y:
console.log(Math.pow (4,2));

//Math.sqrt()
//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(49));

//Math.abs()
//returns the absolute (positive) value of x:
console.log(Math.abs(-8));

//Math.ceil()
//returns the value of x rounded up to its nearest integer:

console.log(Math.ceil(2.2));

//Math.floor()
//returns the value of x rounded down to its nearest integer:

console.log(Math.floor(3.4));

//Math.sin()
// returns the sine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:Angle in radians = Angle in degrees x PI / 180.

console.log("The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180));


//Math.cos()
//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//Angle in radians = Angle in degrees x PI / 180.

console.log("The cosine value of 0 degrees is " + Math.cos(0 * Math.PI / 180));

//Math.min() and Math.max()
console.log(Math.min(10,40,50,9));
console.log(Math.max(10,40,50,9));

//Math.random()
//returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());


//JavaScript Random Integers
//Math.random() used with Math.floor() can be used to return random integers.
// returns a random integer from 0 to 9
console.log (Math.floor(Math.random()* 10));

//returns a random integer between 1 and 10 
console.log(Math.floor(Math.random() *10) + 1);

