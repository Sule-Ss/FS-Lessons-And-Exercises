
/* Array Oluşturma */

// let cars = ["opel", "Audi", "BMW"];

// console.log(cars);

// let cars2 = Array.of("opel", "Audi", "BMW");

// console.log(cars2);

// var cars3 = new Array("opel", "Audi", "BMW");

// console.log(cars3);

/* var num1 = new Array(2,10);
console.log(num1); */

/* var num2 = new Array(10); //b(10) [empty × 10] döndürür.
console.log(num2);
 */


/* Array elemanlarına ulaşım  */

const cars = ["opel", "Audi",[1,2,true],"BMW"];

/* console.log(cars[2][2]); //true

cars[2] = "Mercedes"

console.log(cars); */

/* const ile tanımlama yaptığımızda elemanları değiştirebilir, ekler veya çıkarırız. ancak cars a tamamen farklı bir atama yapılamaz. Yalnızca  elemanlar üzerinden değişiklik yapılabilir. (heap - stack) */

/* Object in Array olup olmadığını anlamak için :  */
/* console.log(typeof cars);
console.log(cars instanceof Array);
console.log(Array.isArray(cars)); */

//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */

const fruits = ["Banana", "Orange","Lemon"];
const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

console.log(fruits.concat(vegetables));
console.log(fruits.concat("Fig", 3, "Pear"));

console.log(""+ fruits);

const daltones = ['Joe','Jack','William','Avarel'];

console.log(num.sort()); //string olarak sıralar