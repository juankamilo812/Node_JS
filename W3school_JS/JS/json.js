//Sending Data

// var myObj = { name: "John", age: 31, city: "New York" };
// var myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;

//Receiving Data

// var myJSON = '{"name":"John", "age":31, "city":"New York"}';
// var myObj = JSON.parse(myJSON);
// console.log(myObj.name);

//Storing Data

// var myObj, myJSON, text, obj;

// myObj = { name: "John", age: 31, city: "New York" };
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// console.log(obj.name);

//JSON Uses JavaScript Syntax

// var myObj, x;
// myObj = { name: "John", age: 30, city: "New York" };
// x = myObj.name;
// console.log(x);

//It can also be accessed like this:
// var myObj, x;
// myObj = { name: "Juan", age: 30, city: "New York" };
// x = myObj["name"];
// console.log(x);

//Data can be modified like this:
// var myObj, x;
// myObj = { name: "John", age: 30, city: "New York" };
// myObj.name = "Gilbert";
// console.log( myObj.name);

//It can also be modified like this:
// var myObj, x;
// myObj = { name: "John", age: 30, city: "New York" };
// myObj["name"] = "juan";
// console.log( myObj.name);

//Create Object from JSON String

// var txt = '{"name":"John", "age":30, "city":"New York"}'
// var obj = JSON.parse(txt);
// console.log(obj.name + " " + obj.age);


// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         console.log(myObj.name);
//     }
// };
// xmlhttp.open("GET", "json_demo.txt", true);
// xmlhttp.send();

//Convert a string into a date:

// var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// var obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);
// console.log( obj.name + ", " + obj.birth);

//Convert a string into a date, using the reviver function:

// var text = '{"name":"Juan", "birth":"1986-12-14", "city":"New York"}';
// var obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// console.log(obj.name + " " + obj.birth);

//Parsing Functions
// var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
// var obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");
// console.log(obj.name + " " + obj.age());

//JSON.stringify()
// var obj = { name: "John", age: 30, city: "New York" };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

//Stringify a JavaScript Array
// var arr = [ "John", "Peter", "Sally", "Jane" ];
// var myJSON = JSON.stringify(arr);
// console.log(myJSON);

//Exceptions Stringify Dates
// var obj = { name: "John", today: new Date(), city: "New York" };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

//Stringify Functions                                                                                                                                                                                                                                                                                                                                                                                           
// var obj = { name: "John", age: function () {return 30;}, city: "New York" };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);

//This can be omitted if you convert your functions into strings 
//before running the JSON.stringify() function.

// var obj = { name: "John", age: function () {return 30;}, city: "New York" };
// obj.age = obj.age.toString();
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);


//Accessing Object Values
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// x = myObj.name;
// console.log(x);

//You can also access the object values by using bracket ([]) notation:
// var myObj, x;
// myObj = { "name": "John", "age": 30, "car": null };
// x = myObj["name"];
// console.log(x);

//Looping an Object
// var myObj, x;
// myObj = { "name": "John", "age": 30, "car": null };
// for (x in myObj) {
//     console.log(x);
// }

//In a for-in loop, use the bracket notation to access the property values:
// var myObj, x;
// myObj = {"name":"John", "age":30, "car":null};
// for (x in myObj) {
//     console.log(myObj[x]);
    
// }

//Nested JSON Objects
// var myObj = {
//     "name":"John",
//     "age":30,
//     "cars": {
//     "car1":"Ford",
//     "car2":"BMW",
//     "car3":"Fiat"
//     }
//   }
//   console.log(myObj.cars.car1 + " " + myObj.cars.car3 + " " + myObj.age );

//Modify Values
// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars": {
//   "car1":"Ford",
//   "car2":"BMW",
//   "car3":"Fiat"
//   }
// }
// myObj.cars.car2 = "Mercedes";

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }

// console.log(x);

//You can also use the bracket notation to modify a value in a JSON object:

// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars": {
//   "car1":"Ford",
//   "car2":"BMW",
//   "car3":"Fiat"
//   }
// }
// myObj.cars["car2"] = "Mercedes";

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }

// console.log(x);
 
//Delete Object Properties

// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars": {
//   "car1":"Ford",
//   "car2":"BMW",
//   "car3":"Fiat"
//   }
// }
// delete myObj.cars.car2;

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }

// console.log(x);
  
//JSON Arrays

//Accessing Array Values

// var myObj, x;
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars":[ "Ford", "BMW", "Fiat" ]
// };
// x = myObj.cars[1];
// console.log(x);

//Looping Through an Array

// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars":[ "Ford", "BMW", "Fiat" ]
// };

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }
// console.log(x);

//Or you can use a for loop:
// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars":[ "Ford", "BMW", "Fiat" ]
// };

// for (i = 1; i < myObj.cars.length; i++) {
//   x += myObj.cars[i] + "\n";
// }
// console.log(x);

//To access arrays inside arrays, use a for-in loop for each array:
// var myObj, i, j, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars": [
//     {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
//     {"name":"BMW", "models":["320", "X3", "X5"]},
//     {"name":"Fiat", "models":["500", "Panda"] }
//   ]
// }
// for (i in myObj.cars) {
//   x += "\n" + myObj.cars[i].name + "\n";
//   for (j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "\n";
//   }
// }
// console.log(x);

//Modify Array Values
// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars":[ "Ford", "BMW", "Fiat" ]
// };
// myObj.cars[1] = "Mercedes";

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }
// console.log(x);

//Delete Array Items

// var myObj, i, x = "";
// myObj = {
//   "name":"John",
//   "age":30,
//   "cars": ["Ford","BMW","Fiat"]
// }
// delete myObj.cars[1];

// for (i in myObj.cars) {
//   x += myObj.cars[i] + "\n";
// }
// console.log(x);
