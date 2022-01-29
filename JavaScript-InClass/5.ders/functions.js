/* ------ Function ------ */

/* function sayHi(){
    console.log('Hello');
}

sayHi(); */

let userName = "Münir";

function sayHi(name) {
  console.log(`Hello ${name}`);
}

function sayHi2(name) {
  return "Hello " + name; //parantezsiz alt satıra atarsak undifened döndürür.
  // return den sonra alt satır yapmak istiyorsak parantez içinde yazmalıyız.
}

console.log(sayHi2); //Fonk. u olduğu gibi yazdırır.
console.log(sayHi2("Matthew")); // 'Hello Matthew'

sayHi(userName);

sayHi("Mark");

sayHi(); // 'Hello undefined' döndürür.

console.log(typeof sayHi); //function
console.log(typeof sayHi()); //undefined

function add100(num1) {
  return num1 + 100;
}

console.log(add100(23)); //123

function add110(num1, num2 = 0) {
  return num1 + num2;
} // eğer 2.parametre verilmezse default 0 al demek.

console.log(add110({ add110 }, 4, 5)); // 4

/*------ Function Expression --------- */

/* tek satırda hem fonksiyon tanımlayıp hem bir değişkene assign etmiş oluyoruz */

/* alt + yön tuşları ile satırları taşıyabiliriz */

let square = function (a) {
  return a * a;
};

console.log({ square }, square(3)); // 9

/*----------- Function Constructor ----- */

let adder = new Function("a", "b", "return a+ b");

console.log({ adder }, adder(2, 6));

console.log(typeof adder);

let sum = function (a, b) {
  return a + b;
};

let addTwo = function (num1) {
  return sum(+num1, 2); // stringi number a çevirmek için + kullandık
};

console.log(addTwo(5)); // 7

console.log(addTwo("4")); // fonk içinde number a çevirmezsek '42' döndürür.

/* ---------shortcut tanımlama -----------*/

function sayHello(name = "new user") {
  name && console.log(`Hello ${name}`);
}

sayHello("mark"); // helloo mark
sayHello(); //hello new user

/* Function kendine verilen değeri değiştirmeyecek */

function square2(num1) {
  num1 *= num1;
  return num1;
}

let myNum = 4;

console.log(square2(myNum)); // 16

console.log(myNum); // 4

let student = {};

student.name = "Mesut";

function sayHi3(student) {
  console.log(`Hello! ${student.name} from entry point`);
  student.name = "Zeynep";
  student.lastname = "özgür";
  console.log(`Hello! ${student.name} inside function`);
  student = { name: "Leon" };
  console.log(`Hello! ${student.name} inside function`);
}

sayHi3(student);
console.log(`Hello! ${student.name} from outside`);
console.log(`Hello! ${student.lastname} from outside`);
