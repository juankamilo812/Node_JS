//Using the JavaScript Keyword new

let person = new Object();
person.nombre = "juan Camilo";
person.apellido = "Garcia";
console.log(person.nombre + " " + person.apellido);

let person2 = {
    nombres: "Daniel",
    apellidos: "Garcia"
};
console.log(person2.nombres + " " + person2.apellidos);


//JavaScript Objects are Mutable

var obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

var x = obj;
x.age = 10;

console.log(obj.firstName + " is " + obj.age + " years old.");

//JavaScript for...in Loop

var txt = "";
var perfil = { fname: "John", lname: "Doe", age: 25 };
var x;
for (x in perfil) {
    txt += perfil[x] + " ";
}
console.log(txt);

//Adding New Properties
var person3 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};
person3.nationality = "English";
console.log(person3.firstname + " is " + person3.nationality + ".");

//Deleting Properties

var person3 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

delete person3.age;
console.log(person3.firstname + " is " + person3.age + " years old.");

//JavaScript Object Methods
//If you access it without (), it will return the function definition: 
var person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 1,
    fullName: function () {
        return this.id + " " + this.firstName + " " + this.lastName;
    }
};
console.log(person4.fullName());


//Using Built-In Methods
var message = "Hello world!";
var x = message.toUpperCase();
console.log(x);

//Adding a Method to an Object
var person5 = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
  };
  person5.name = function() {
    return this.firstName + " " + this.lastName;
  };
  console.log("My father is " + person5.name());


//JavaScript Getter (The get Keyword)

  var person6 = {
    firstName: "John",
    lastName : "Doe",
    language : "Display data from the object using a getter",
    get lang() {
      return this.language;
    }
  };
 console.log(person6.lang);


 //JavaScript Setter (The set Keyword)

 var person7 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {
      this.language = value;
    }
  };
  // Set a property using set:
  person7.lang = "This example uses a lang property to set the value of the language property";
  // Display data from the object:
  console.log(person7.language);
  
//JavaScript Function or Getter?
  var person8 = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  // Display data from the object using a getter:
console.log(person8.fullName);


var person9 = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  // Display data from the object using a method:
console.log(person9.fullName());

  
//Data Quality

var person10 = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
  console.log(person10.lang);
  

  //Why Using Getters and Setters?

  var obj = {
      counter : 0,
      get reset() {
        this.counter = 1;
      },
      get increment() {
        this.counter++;
      },
      get decrement() {
        this.counter--;
      },
      set add(value) {
        this.counter += value;
      },
      set subtract(value) {
        this.counter -= value;
      }
    };

    obj.reset;
    obj.add = 5;
    obj.subtract = 1;
    obj.increment;
    obj.decrement;
 
   console.log(obj.counter);


   //Object.defineProperty() 

   var obj1 = {counter1 : 0};

   Object.defineProperty(obj1, "reset", {
     get : function () {this.counter1 = 1;}
   });
   Object.defineProperty(obj1, "increment", {
     get : function () {this.counter1++;}
   });
   Object.defineProperty(obj1, "decrement", {
     get : function () {this.counter1--;}
   });
   Object.defineProperty(obj1, "add", {
     set : function (value) {this.counter1 += value;}
   });
   Object.defineProperty(obj1, "subtract", {
     set : function (value) {this.counter1 -= value;}
   });

   obj1.reset;
   obj1.add = 5;
   obj1.subtract = 1;
   obj1.increment;
   obj1.decrement;
console.log(obj1.counter1);
