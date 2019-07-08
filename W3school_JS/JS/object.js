// //Using the JavaScript Keyword new

// let person2 = new Object();
// person2.nombre = "juan Camilo";
// person2.apellido = "Garcia";
// console.log(person2.nombre + " " + person2.apellido);

// let person2 = {
//     nombres: "Daniel",
//     apellidos: "Garcia"
// };
// console.log(person2.nombres + " " + person2.apellidos);


// //JavaScript Objects are Mutable

// var obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// var x = obj;
// x.age = 10;

// console.log(obj.firstName + " is " + obj.age + " years old.");

// //JavaScript for...in Loop

// var txt = "";
// var perfil = { fname: "John", lname: "Doe", age: 25 };
// var x;
// for (x in perfil) {
//     txt += perfil[x] + " ";
// }
// console.log(txt);

// //Adding New Properties
// var person3 = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };
// person3.nationality = "English";
// console.log(person3.firstname + " is " + person3.nationality + ".");

// //Deleting Properties

// var person3 = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// delete person3.age;
// console.log(person3.firstname + " is " + person3.age + " years old.");

// //JavaScript Object Methods
// //If you access it without (), it will return the function definition: 
// var person4 = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 1,
//     fullName: function () {
//         return this.id + " " + this.firstName + " " + this.lastName;
//     }
// };
// console.log(person4.fullName());


// //Using Built-In Methods
// var message = "Hello world!";
// var x = message.toUpperCase();
// console.log(x);

// //Adding a Method to an Object
// var person5 = {
//     firstName: "John",
//     lastName : "Doe",
//     id     : 5566,
//   };
//   person5.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
//   console.log("My father is " + person5.name());


// //JavaScript Getter (The get Keyword)

//   var person6 = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "Display data from the object using a getter",
//     get lang() {
//       return this.language;
//     }
//   };
//  console.log(person6.lang);


//  //JavaScript Setter (The set Keyword)

//  var person7 = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "NO",
//     set lang(value) {
//       this.language = value;
//     }
//   };
//   // Set a property using set:
//   person7.lang = "This example uses a lang property to set the value of the language property";
//   // Display data from the object:
//   console.log(person7.language);

// //JavaScript Function or Getter?
//   var person8 = {
//     firstName: "John",
//     lastName : "Doe",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   // Display data from the object using a getter:
// console.log(person8.fullName);


// var person9 = {
//     firstName: "John",
//     lastName : "Doe",
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   // Display data from the object using a method:
// console.log(person9.fullName());


// //Data Quality

// var person10 = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "en",
//     get lang() {
//       return this.language.toUpperCase();
//     }
//   };
//   console.log(person10.lang);


//   //Why Using Getters and Setters?

//   var obj = {
//       counter : 0,
//       get reset() {
//         this.counter = 1;
//       },
//       get increment() {
//         this.counter++;
//       },
//       get decrement() {
//         this.counter--;
//       },
//       set add(value) {
//         this.counter += value;
//       },
//       set subtract(value) {
//         this.counter -= value;
//       }
//     };

//     obj.reset;
//     obj.add = 5;
//     obj.subtract = 1;
//     obj.increment;
//     obj.decrement;

//    console.log(obj.counter);


//    //Object.defineProperty() 

//    var obj1 = {counter1 : 0};

//    Object.defineProperty(obj1, "reset", {
//      get : function () {this.counter1 = 1;}
//    });
//    Object.defineProperty(obj1, "increment", {
//      get : function () {this.counter1++;}
//    });
//    Object.defineProperty(obj1, "decrement", {
//      get : function () {this.counter1--;}
//    });
//    Object.defineProperty(obj1, "add", {
//      set : function (value) {this.counter1 += value;}
//    });
//    Object.defineProperty(obj1, "subtract", {
//      set : function (value) {this.counter1 -= value;}
//    });

//    obj1.reset;
//    obj1.add = 5;
//    obj1.subtract = 1;
//    obj1.increment;
//    obj1.decrement;
// console.log(obj1.counter1);

//JavaScript Object Constructors

//It is considered good practice to name constructor functions with an upper-case first letter.

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create a Person object
//   var myFather = new Person("John", "Doe", 50, "blue");

//   // Display age
// console.log("Mi padre se llama" + " " + myFather.firstName + " " + myFather.lastName);


//Adding a Method to an Object
//You cannot add a new property to a constructor function.

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create 2 Person objects
//   var myFather = new Person("John", "Doe", 50, "blue");
//   var myMother = new Person("Sally", "Rally", 48, "green");

//   // Add nationality to first object
//   myFather.nationality = "English";

//   // Display nationality 
// console.log("My father is " + myFather.nationality);

//Adding a Property to a Constructor



//To add a new property to a constructor, you must add it to the constructor function:

//   function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
//   }

//   // Create 2 Person objects
//   var myFather = new Person("John", "Doe", 50, "blue");
//   var myMother = new Person("Sally", "Rally", 48, "green");

//   // Display nationality
//  console.log( "My father is " + myFather.nationality + ". My mother is " + myMother.nationality);

//Adding a Method to a Constructor
// Constructor function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.name = function () {
//     return this.firstName + " " + this.lastName
//   };
// }

// // Create a Person object
// var myFather = new Person("John", "Doe", 50, "blue");

// // Display full name
// console.log("My father is " + myFather.name());

//The changeName() function assigns the value of name to the person's lastName property.

// function Person(firstName,lastName,age,eyeColor) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.eyeColor = eyeColor;
//   this.changeName = function (name) {
//     this.lastName = name;
//   }
// }
// // Create a Person object
// var myMother = new Person("Sally","Rally",48,"green");

// // Change last name
// myMother.changeName("Doe");

// // Display last name
// console.log("My mother's last name is " + myMother.lastName);


// Using the prototype Property The JavaScript prototype property allows you to add new properties to object constructors:

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.nationality = "English";

// var myFather = new Person("John", "Doe", 50, "blue");
// document.getElementById("demo").innerHTML =
// "The nationality of my father is " + myFather.nationality; 


//The JavaScript prototype property also allows you to add new methods to objects constructors:

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.name = function () {
//   return this.firstName + " " + this.lastName
// };

// var myFather = new Person("John", "Doe", 50, "blue");
// console.log("My father is " + myFather.name());

//Changing a Property Value

// Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN" 
// };
// // Change a property
// Object.defineProperty(person, "language", {value:"France"})
// console.log(person.language);

//Listing All Properties
// Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// }
// // Change Property
// Object.defineProperty(person, "language", {enumerable:false});
// // Display Properties
// console.log( Object.getOwnPropertyNames(person));

//Listing Enumerable Properties
//This example list only the enumerable properties of an object:

// // Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// }
// // Change Property
// Object.defineProperty(person, "language",  {enumerable:false});
// // Display Properties
// console.log(Object.keys(person));


//Adding a Property This example adds a new property to an object:

// Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// };
// // Add a property
// Object.defineProperty(person, "year", {value:"2008"})
// console.log(person.year);

//Adding Getters and Setters The Object.defineProperty() method can also be used to add Getters and Setters:

// // Create an object:
// var person = {firstName:"John", lastName:"Doe"};

// // Define a getter
// Object.defineProperty(person, "fullName", {
//   get : function () {return this.firstName + " " + this.lastName;}
// });

// // Display full name
// console.log(person.fullName);


//A Counter Example

var obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter);

