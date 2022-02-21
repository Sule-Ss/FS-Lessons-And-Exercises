# JavaScript Session-11 Class Notes :rocket:

## Session-11 OOP

### Objects

An object is a built-in data type for storing key-value
pairs. Data inside objects are unordered, and the values
can be of any type.

Key-value pairs are stored in objects using a key and a value.
This data is also called properties.

A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

When the value is a function, it is called a method.
Methods are functions that are stored inside objects.

> The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax. **mdn**

JavaScript is an object-based language. Everything is an object in JavaScript.

### Object Constructors

In practice, you often need to create many similar objects like the person object.

 **Object Literals** are a way to create objects without using the Object() constructor.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};
```
Another way to create objects is to use the Object() constructor.

  **Object Constructors** are a way to create objects without using the object initializer / literal syntax.

  ```js
  let person = new Object();
  person.firstName = "John";
  person.lastName = "Doe";
  ```
We use a constructor function to define a custom type and the new operator to create multiple objects from this type.

A constructor function is a regular function with the following convention:

  - starts with a capital letter like Person, Document, etc.
  - should be called only with the new operator.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```
To create an object from this constructor, we use the new operator:

  - the new operator creates a new empty object
  - the new operator invokes the constructor function with the this keyword bound to the new object
  - the new operator returns the new object

```js
let person = new Person("John", "Doe");
```
### Object 

Properties are the values associated with a JavaScript object. A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted, but some are read only.

  - Properties are the values associated with a key.
  - Properties are accessed using the dot notation.
  - or can be accessed using the square bracket notation.
  - Properties are usually strings.
  - Properties can be any value, including functions.

> we can use space in property names by using the bracket notation.
  ```js
  let itSchool = { 
  name: "Clarusway", 
  location: "U.S.", 
  established: "2019", 
};
  ```

console.log(itSchool.name); // Expected Output : "Clarusway"
console.log(itSchool["location"]); // Expected Output : "U.S."
  ```
Adding new properties to an object is done using the dot notation:

  ```js
  let itSchool = { 
    name: "Clarusway", 
    location: "U.S.", 
    established: "2019", 
};

itSchool["First Graduate Year"] = "2020";
console.log(itSchool); // Expected Output : { name: 'Clarusway', location: 'U.S.', established: '2019', First Graduate Year: '2020' }
  
itSchool.firstAlumniYear = "2020";
  ```
Modifying existing properties is done using the dot notation:

  ```js
  let itSchool = { 
    name: "Clarusway", 
    location: "U.S.", 
    established: "2019", 
};

  itSchool.established = "2020";
  ```
Delete properties is done using the delete keyword:

  ```js
  let itSchool = { 
    name: "Clarusway", 
    location: "U.S.", 
    established: "2019", 
};

  delete itSchool.established;

  console.log(itSchool); // Expected Output : { name: "Clarusway", location: "U.S." }
  ```

An object can also contain another object. For example,

```js	
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70
```

### Object Methods

Objects can also contain methods. Methods are functions that are stored inside objects.

Syntax:

  ```js
  let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
    greet: function() { console.log('hello'); },
    greet2() { console.log('hello2'); }

  };
  ```
### Prototype

JavaScript objects inherit properties and methods from other objects. The prototype property of an object is where we can define methods and properties that we want other objects to inherit. We can also use the prototype property to set up what the constructor function should return when new is used.

  ```js
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

  let person = new Person("John", "Doe");
  console.log(person.fullName()); // Expected Output : "John Doe"
  ```

### Class

In JavaScript, objects are instances of a class. A class is a blueprint for creating objects. A class defines properties and methods that are shared by all instances of that class. Private properties and methods are not accessible outside the class. `#` character is used to mark private properties and methods.

  ```js
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#privateAge = 10;
    }
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  let person = new Person("John", "Doe");
  console.log(person.fullName()); // Expected Output : "John Doe"
  ```

## References

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
2. https://www.programiz.com/javascript/object
3. https://javascript.info/object
4. https://www.javatpoint.com/javascript-objects
5. https://www.javascripttutorial.net/
6. https://www.w3schools.com/js/js_objects.asp
