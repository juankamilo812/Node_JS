//How to Recognize an Array
//The toString() method returns an array as a comma separated string
var marcas = ["Diesel", "Chevinon", "Fila", "Nike"];
console.log("the method isArray returns true when used on an array: " + Array.isArray(marcas));
console.log(marcas.toString());

//The join() method also joins all array elements into a string.

var frutas = ["Pera", "Guayaba", "Manzana"];
console.log(frutas.join("*"));

//The pop() method removes the last element from an array:

var parametros = ["Entrada", "salida", "prueba"];
console.log(parametros.pop());
console.log(parametros);

//The push() method adds a new element to an array (at the end):
var prueba = ["prueba0", "prueba1", "prueba2"];
console.log(prueba.push("prueba3"));
console.log(prueba);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var test = ["test0", "test1", "test2"];
console.log(test.shift());
console.log(test);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// <script type="text/javascript" src="Arrays.js">  se codifica en el html

var lol = ["lol0", "lol1", "lol2", "lol3"];
function src() {
    console.log("Se adiciona el nuevo elemento " + lol.unshift("lol4"));
    console.log(lol);
}

src ();

//Changing Elements
//Array elements are accessed using their index number:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("la fruta ubicada en la pocision 2 es " + fruits[2]);
console.log("El total de fruta es " + fruits.toString());

//The length property provides an easy way to append a new element to an array:
var element = ["element1", "element2", "element3", "element4","elment5"];
function elto() {
    console.log("La cantidad  de frutas es " + element.length);
}
elto ();

//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
var herramientas = ["Discovery", "Notificaciones", "Kiosko", "Intranet"];
console.log("Las herramienta son " + herramientas);
console.log(delete herramientas[4]);


//The splice() method can be used to add new items to an array:
//T//he first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:
var herramientas1 = ["Discovery", "Notificaciones", "Kiosko", "Intranet"];
console.log("los 2 nuevas  herramientas son " + herramientas1.splice(3, 1, "Keepas", "Skype"));

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: " + fruits);

function myFunction() {
    fruits.splice(2, 2, "papaya", "Mora");
   console.log("New Array: " + fruits);

}
myFunction ();

//The concat() method creates a new array by merging (concatenating) existing arrays:
var nombre = ["Juan", "Camilo"];
var apellido = ["Garcia","Hurtado"]
var nombrecompleto = nombre.concat(apellido);
console.log("El Nombre completo es " +  nombrecompleto);


//The slice() method slices out a piece of an array into a new array.

var univ = ["FUMC","EDU","MED"];
console.log("Corta los 3 elementos en los siguentes: " + "\n"+ univ +  "\n" + univ.slice(0,2));
