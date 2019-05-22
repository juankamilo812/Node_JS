// //The For Loop
// //Statement 1 is executed (one time) before the execution of the code block.
// //Statement 2 defines the condition for executing the code block.
// //Statement 3 is executed (every time) after the code block has been executed.

var text = '';
var i;
for (i = 0; i < 2; i++) {
    console.log('The number is ' + i);
}


// function bucle() {
//     try {
//         let cars = ['BMW', 'MAZDA', 'FORD', 'RENOLD'];
//         for (i = 0; i < cars.length; i++) {
//             console.log('Los marcas de carros son ' + cars[i]);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// bucle()

// //you can omit statement 1 (like when your values are set before the loop starts):
// //If you omit statement 2, you must provide a break inside the loop. Otherwise the 
// //loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 2;
// var len = cars.length;
// //var text = "";

// for (; i < len; i++) {
//     console.log('Las marcas son ' + cars[i]);

// }

// //Often statement 3 increments the value of the initial variable.
// //This is not always the case, JavaScript doesn't care, and statement 3 is optional.
// //Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
// //Statement 3 can also be omitted (like when you increment your values inside the loop):

// var cars = ["BMW", "Volvo", "Saab", "Ford"];

// var i = 0;
// var len = cars.length;
// //var text = "";

// for (; i < len;) {
//     console.log(cars[i]);
//     i++;
// }

//The While Loop

// let test = '';
// let i = '0';
// while (i > 10) {
//     console.log('El numero es ' + i);
//     i++;
// }

// //The Do/While Loop

// let la ='';
// let i = 0;
// do {
// console.log('The number is ' + i);
// i++;

// } while (i<4); {

// }



//Comparing For and While

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// for (;cars[i];) {
//   console.log('Los marcas son ' + cars[i]);
//   i++;
// }

//The loop in this example uses a while loop to collect the car names from the cars array:

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// while (cars[i]) {
//     console.log('las tipos de M son: ' + cars[i]);

//     i++;

// }