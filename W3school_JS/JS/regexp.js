//Regular Expressions

//Using String search() With a String
//The search() method searches a string for a specified value and returns the position of the match:

var searc = "Hola Mundo";
var result = searc.search("Mundo");
console.log(result);

//Using String search() With a Regular Expression
//Use a regular expression to do a case-insensitive search for "w3schools" in a string:

var searc1 = "Hola Mundo";
var result1 = searc1.search(/MUNDO/i);
console.log(result1);


//Using String replace() With a String
//The replace() method replaces a specified value with another value in a string:

function rpl() {
    try {
        let replea = "Test de prueba";
        let result2 = replea.replace("prueba", 'EXAMEN');
        console.log(result2);
    } catch (error) {
        console.log(error.message);
    }
}

rpl()

//Use String replace() With a Regular Expression
//Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

function rpl1() {
    try {
        let replea1 = "Test de prueba";
        let result3 = replea1.replace(/TEST/i, 'Se genera el test ');
        console.log(result3);
    } catch (error) {
        console.log(error.message);
    }
}

rpl1()


/////////////////////////////////////Regular Expression Modifiers////////////////////////////////////
//Modifiers can be used to perform case-insensitive more global searches:
//match() /i IPerform case-insensitive matching

var searc4 = "Hola Mundo";
var result4 = searc4.match(/hOLA/i);
console.log(result4);

//match() /g Perform a global match (find all matches rather than stopping after the first match)

var searc5 = "El metodo se obtiene el eL EL parametro";
var patt1 = /e/g
var result5 = searc5.match(patt1);
console.log(result5);

//match() /m Perform multiline matching
try {
    var searc6 = "/nIs th/nis ?";
    var patt6 = /is/m;
    var result6 = searc6.match(patt6);
    console.log(result6); 
} catch (error) {
    console.log(error.message);
    
}

/////////////////////////////////////Regular Expression Patterns////////////////////////////////////
//Brackets are used to find a range of characters:
//[abc] /g Find any of the characters between the brackets

var searc7 = "Is* this* all* there is?";
var patt7 = /[*,h,a]/g
var result7 = searc7.match(patt7);
console.log(result7);

// [0-9]  /g  Find any of the digits between the brackets

var searc8 = "123456789";
var patt8 = /[1-4]/g

var result8 = searc8.match(patt8);
console.log(result8);

// (x|y) /g  Find any of the alternatives separated with 

var searc9 = "re, green, red, green, gren, gr, blue, yellow";
var patt9 = /(red|green)/g
var result9 = searc9.match(patt9);
console.log(result9);

//Metacharacters are characters with a special meaning:

// /g Find a digit

var searc10 = "Give 100%!";
var patt10 = /\d/g;
var result10 = searc10.match(patt10);
console.log(result10);

// /g Find a whitespace character

var searc11 = "Is this all there is?";
var patt11 = /\s/g;
var result11 = searc11.match(patt11);
console.log(result11);


//Find a match at the beginning or at the end of a word

var searc11 = "Is this all there is?";
var patt11 = /\s/g;
var result11 = searc11.match(patt11);
console.log(result11);

//Find a match at the beginning or at the end of a word

var searc12 = "Visit W3Schools";
var patt12 = /\bW3/g;
var result12 = searc12.match(patt12);
console.log(result12);

//Find the Unicode character specified by the hexadecimal number xxxx

var searc13 = "Visit W3Schools. Hello World!";
var patt13 = /\u0057/g;
var result13 = searc13.match(patt13);
console.log(result13);


//Quantifiers define quantities:
//Matches any string that contains at least one n
//n+ Matches any string that contains at least one n

var searc14 = "Hellooo World! Hello W3Schools!";
var patt14 = /o+/g;
var result14 = searc14.match(patt14);
console.log(result14);

//n* Matches any string that contains zero or more occurrences of n

var searc15 = "Hellooo World! Hello W3Schools!";
var patt15 = /o+/g;
var result15 = searc15.match(patt15);
console.log(result15);

// n? Matches any string that contains zero or one occurrences of n
var searc16 = "Hellooo World! Hello W3Schools!";
var patt16 = /lo*/g;
var result16 = searc16.match(patt16);
console.log(result16);

//Using test()
//It searches a string for a pattern, and returns true or false, depending on the result.

try {
    let text= "stamos"
    console.log(/s/.test(text));
} catch (error) {
    console.log(error.message);
    
}

//Using exec() 

var obj = /e/.exec("The best things in life are free!");
console.log(obj);

let obj1 = ("The best things in life are free!");
console.log(/e/.exec(obj));
