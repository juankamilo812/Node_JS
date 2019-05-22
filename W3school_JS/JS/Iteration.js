
//Array.forEach()
//The forEach() method calls a function (a callback function) once for each array element.

var txt = "";
var nombres = ["Juan", "Camilo", "Daniel"];
nombres.forEach(listar_nombres);

function listar_nombres(value, index, array) {
    txt = txt + index + value + "\n";

}
console.log(txt);

//Array.map()
//The map() method creates a new array by performing a function on each array element

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var method_number = number.map(retornar_numeros);
function retornar_numeros(v, i, a) {
    return v * 2;
}
console.log(method_number);


//Array.filter()
//The filter() method creates a new array with array elements that passes a test.
//This example creates a new array from elements with a value larger than 18

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var method_filter = number.filter(filter_numbers);
function filter_numbers(v, i, a) {
    return v >= 8;
}
console.log("El filtro es " + method_filter);

//Array.reduce()
//The reduce() method works from left-to-right in the array. See also reduceRight().
//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
//The reduceRight() works from right-to-left in the array. See also reduce().

var numbers = [45, 4, 1];
var sum = numbers.reduce(method_reduce);
function method_reduce(total, value, index, array) {
    return total + value;
}
console.log("El total de la suma es " + sum);

//Array.every() ................. AND
//The every() method check if all array values pass a test.


var num = [4, 3, 8];
var method_every = num.every(return_text);
function return_text(v) {
    return v > 4;
}
console.log("every es igual " + method_every);

//Array.some() ...................OR

var su = [2, 6, 10];
var method_some = su.some(return_te);
function return_te(v) {
    return v > 11;
}
console.log("some es igual " + method_some);


//Array.indexOf() The indexOf() method searches an array for an element value and returns its position.
//Array.lastIndexOf()  Array.lastIndexOf() is the same as Array.indexOf(), but searches from the end of the array.

var fruits = ["Apple", "Orange", "Pera", "Mango"];
var a = fruits.indexOf("Orange");
console.log("the position is " + (a + 1));

//Array.find()
//The find() method returns the value of the first array element that passes a test function.
//This example finds (returns the value of) the first element that is larger than 18:

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(find);
function find(value) {
    return value > 17;
}
console.log("First number over 18 is " + first);

//The findIndex() method returns the index of the first array element that passes a test function.
//T//his example finds the index of the first element that is larger than 18://

var numb = [4, 9, 16, 25, 29];
var first_ = numb.findIndex(findIndex);
function findIndex(value) {
    return value > 20;
}
console.log("the First number this  in the position  " + first_);

