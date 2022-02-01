/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student); */

let students = ["John", "Jane", "Joe"];

/* function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

for (let i = 0; i < students.length; i++){
    sayHi(students[i])
}
 */

/* function sayHi(student){
    for (let i = 0; i< student.length; i++){
        console.log(`Welcome ${student[i]}`);
    }
}

sayHi(students);
 */

/* function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++)
    sum += arguments[i]
    return sum
}

console.log(sum(1));
console.log(sum(1,2,3,4,5,6)); */

/*  rest parametresini sonda kullanbiliriz. başta kullanılmaz. others ve tax ı rest parametresi olarak verdik. */

/* Rest Parametresi?
Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar. */

/* function sum(a,b, ...others){ 
    console.log({arguments});
    console.log({others});
    let sum = 0;
    for(let i = 0; i < arguments.length; i++)
    sum += arguments[i]
    return sum

}
console.log(sum(1,2,3,4,5,6));
 */

/* const bill = function(item, tax){
    let total = 0;
    for(let i =0; i < item.length; i++){
        total += item[i]+item[i]*tax;
    }
    return total;
}

console.log(bill([10,15,20],0.18)); */

// Ternary ile :

/* 
function div2(num1, num2){
return num2 ? num1/num2 : 'Zero division Error!'
}

console.log(div2(10,3));
 */

// Kendi kendini çağıran fonksiyonlar(recursive function) :

/* function pascalNumber1(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(pascalNumber1(5));

function pascalNumber2(n) {
  return (n * (n + 1)) / 2;
}

console.log(pascalNumber2(100)); */

/* function pascalNumber3(n) {
  if (n == 1) return 1; // çıkış yolunu belirtmek şart
  return n + pascalNumber3(n - 1);
}

console.log(pascalNumber3(5));

//Ternary ile:
function pascalNumbers(n) {
  return n === 1 ? 1 : n + pascalNumbers(n - 1);
} */

/* ---- Arrow Function -------- */

/* 
ES5  Regular Function
var x = function(x, y) {
  return x * y;
}

 ES6  Arrow Function
const x = (x, y) => x * y;
*/

function add100(a) {
  return a + 100;
}

//function experision (isimsiz. isim vermek opsiyonel)

/* console.log(add100(10));

let toplam = function(a){return a + 100}
 */
//Arrow func. ile :

let toplam = (a) => {
  return a + 100;
}; // tek parametre gönderiyorsak parantezi gözardı edebiliriz.

let toplam2 = (a) => a + 100; //en sade arrow func. hali

console.log(toplam(10));
console.log(toplam2(20));

/* const selam = (toWhom) => `Selam sana ${toWhom}`
console.log(selam('Mustafa'));
 */
/* let user = 'Murat';

let sayHi2 = () => console.log(`Welcome ${user}`);

sayHi2() */

let toplam3 = (num1, num2) => num1 + num2

console.log(typeof toplam3()); //number


let iife = (function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);
console.log(iife(5));

