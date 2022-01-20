var f;
console.log(typeof f);

f = 5;
console.log(typeof f);

f = "Merhaba ben string";
console.log(typeof f);

console.log(typeof 5);
console.log(typeof 5.45);
console.log(typeof -2);
console.log(typeof (1 / 0)); //Number
console.log(typeof NaN); //number
console.log(typeof typeof 5); //string
console.log(1 / 0);
console.log(typeof Infinity); //number

console.log("string");
console.log("string'in kaçış dizisi");

var merhaba = "Merhaba";
var selam = 'Sana da selam" Kaçış dizisi kullandım';

console.log(merhaba, "\n", selam);

var bosluk = "Boşluk miktarının          önemi yok string alır";

console.log(bosluk);

/* ---- Template Literals ---- */

var d = `Merhaba Dünya bu tırnak içinde """ '''' istediğimiz kadar tırnak kullanabiliriz.`;

console.log(d);

var instructor = "Mark";
var d = `Merhaba ${instructor}`; // f string gibi

console.log(d);

console.log(`${2 + 3}`);

/* ---- Booleans ------- */

var x = Boolean("Hi Everyone");
console.log(x);

var x = Boolean(""); // False
var y = Boolean(-0); // False
var z = Boolean(0); //False
var t = Boolean(null); //False

console.log({ x }, { y }, { z }, { t });

console.log(3 > 5);
console.log(3 == 5);
console.log(3 === 5);
console.log(Boolean(0)); //False
console.log(Boolean("0")); //True

var s;
console.log(Boolean(s)); //False verir. Undefined olduğu için.
console.log(typeof s); //undefined

console.log(Boolean(null)); //False
console.log(typeof null); //object

console.log(null == false); //false

console.log(null == undefined); //true
console.log(null === undefined); //false

/* JavaScript'te null, değerin yokluğunu ifade eden dile özgü anahtar kelimedir. Type operatörünü kullanırsak null “object” stringini döndürür. JavaScript'in ayrıca kendine özgü olarak değerin yokluğunu ifade eden “undefined” tipi bulunur. */

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(2 + '2');  //22
console.log(2 + +'2'); //4
