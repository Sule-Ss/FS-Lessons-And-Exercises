/* var x = 2;
var y = 5;
var z = 7;
var t = '2'; */

/* Str ve number işleme sokulabilir. */

/* var u = t-y;

console.log(x+y);
console.log(x+t);
console.log(z- 't'); //NaN

console.log(typeof u, u);
console.log(z/t);

console.log(typeof(5/2));
console.log(5/2); */


/* var a = 5;
var b = 0;

console.log(a/b);
console.log(typeof (Infinity));

var c = 100+50*3
console.log(c);

var a = 10;

console.log(a++);
console.log(a);

var b = 5;
console.log(b);
console.log(++b);
console.log(++b);
 */
//c = 8;
/* console.log(c--);  //8
console.log(c);   //7

var d = ++c

console.log({d}, {c}); */

// console.log(c++ + ++c);  // 8 + 10 = 18

/* var v = '2';
console.log(++v); // 3 stringe çevirir
 */
/* var input = prompt("Enter User Name");
console.log(typeof input);  // string*/

/* var input = Number(prompt("Enter age"));

console.log(input, typeof input); // 12 number */

/* var c = '8';

console.log(-c);  // -8 */

/* var a = 4;
var b = '4';

var c = a == b;

console.log(a == b); //true
console.log(c); //true

console.log(a !== b); //true
 */


// var a = 'a';
// var b = 20;

// console.log(a.charCodeAt()); // ascii kodu :97

// console.log('2'.charCodeAt()); // ascii kodu :50

// console.log(b > a);  // false 50>97 oldu.

// console.log('FullStack' == 'Fullstack'); // false verir s lerin ascii kodu farklı. harfleri sırayla kıyaslar

// var a = (true || false);
// console.log(a); // true

// var a = (2 || 3)
// console.log(a); // 2

// var a = (0 || 23);
// console.log(a); // 23

// var b = (0 && false);
// console.log(b);  // 0

// var b = ('' && false);
// console.log(b); // '' verir. ilk falsy değeri verir.

// console.log(null && NaN); // ilk değer null verir.

// var capitalLetter = true;
// var symbol = true;
// var passLenght = false;

// var result = capitalLetter && symbol && passLenght;
// console.log(result || 'Try again'); //Try again
// console.log('Try again' || result); //Try again

var a ;
console.log(a);
console.log(a ?? 'Null veya undefined'); // 'Null veya undefined'

var b = null;
console.log(b ?? 'Null veya undefined'); //'Null veya undefined' 

var c = 1;
console.log(c ?? ' Null or undefined');  // 1

/* Kullanıcıdan bir bilgi istediğnde o bilgi vermezse kullanıcı databesde değer null oluyor ona göre kod hata vermesin diye bir değer tanımlıyorsun null için. örnek girilmedi diye */