//The sort() method sorts an array alphabetically:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("El metodo sort odena alfabericamente " + fruits.sort().toString());

//The reverse() method reverses the elements in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
function frutas() {
    console.log("La matriz en orden descendente " + fruits.reverse().toString());
}
frutas();


//Numeric Sort
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
var points = [40, 100, 1, 5, 25, 10];
console.log(points.reverse().toString());
console.log(points.sort() + "\n" + points.reverse());

//Find the Highest (or Lowest) Array Value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log("El indice es " + points[0]);

//Sorting an Array in Random Order

var points = [40, 100, 1, 5, 25, 10];
function myFunction() {
    points.sort(function (a, b) { return 0.5 - Math.random() });
    console.log(points);
}
myFunction();

//Using Math.max() on an Array
//You can use Math.max.apply to find the highest number in an array:
//You can use Math.min.apply to find the lowest number in an array:

var points = [40, 100, 1, 5, 25, 10];
console.log("El numero mas alto es " + myArrayMax(points));
function myArrayMax(arr) {
    return Math.min.apply(null, arr);
}
myArrayMax();

//Even if objects have properties of different data types, the sort() method can be used to sort the array.

var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

pintar();
ordena_y_pinta();

//--------------------------------------------definiciones
function ordena_y_pinta() {
    cars.sort(function (a, b) { return a.year - b.year });
    pintar();
}

var txt 

function pintar() {
    console.log(cars[0].type + " " + cars[0].year + "\n" +
        cars[1].type + " " + cars[1].year + "\n" +
        cars[2].type + " " + cars[2].year);
}

pintar ()
