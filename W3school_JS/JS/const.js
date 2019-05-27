
//Variables defined with const behave like let variables, except they cannot be reassigned:
// try {
//     const PI = 3.141592653589793;
//   PI = 3.14;
//   console.log(PI);
  
// } catch (error) {
//     console.log(error.message);
    
// }

//Block Scope
//The x declared in the block, in this example, is not the same as the x declared outside the block:

// var  x = 10;
// // Here x is 10
// {  
//   const x = 2;
//   // Here x is 2
// }
// // Here x is 10
// console.log(x);

//Assigned when Declared

// const PI = 3.14159265359;
// console.log(PI);


//Primitive Values
//If we assign a primitive value to a constant, we cannot change the primitive value: 

// try {
//     const PI = 3.1;
//     console.log(PI);
    
// } catch (error) {
//     console.log(error.message);
    
// }

//Constant Objects can Change
//You can change the properties of a constant object:

// // Create an object:
// const car = {type:"Fiat ", model:"500", color:"white"};

// // Change a property:
// car.color = "red ";

// // Add a property:
// car.owner = "Johnson ";

// // Display the property:
// console.log(car.owner + car.color + car.type);


//But you can NOT reassign a constant object:

// try {
//     const car = {type:"Fiat", model:"500", color:"white"};
//     car = {type:"Volvo", model:"EX60", color:"red"};
//   }
//   catch (err) {
//     console.log(err.message);
//     ;
//   }

//Constant Arrays can Change

// // Create an Array:
// const cars = ["Saab", "Volvo", "BMW"];

// // Change an element:
// cars[0] = "Toyota";

// // Add an element:
// cars.push("Audi");

// // Display the Array:
// console.log(cars);

//But you can NOT reassign a constant array:
// try {
//     const cars = ["Saab", "Volvo", "BMW"];
//     cars = ["Toyota", "Volvo", "Audi"];
//   }
//   catch (err) {
// console.log(err.message);

//   }

 
