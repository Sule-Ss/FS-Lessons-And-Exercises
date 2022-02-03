/* let str1 = 'Hello '
let str2 = "World"
let str3 = `${str1+str2}`
console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3); */

/* let str2 = "World"
let str4 = new String("A string object")
// console.log(typeof str4); //object
console.log(str4);
console.log(str2); */

// concat()

/* var s1 = "Hello ";
var s2 = "World!";
var s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(' 2022 ', s1));
console.log({s1},{s2}); */

//charAt

/* var a = 'primitive.\nlerin properti veya metodu olmaz.'
console.log(a);
//console.log(a.charAt()) //boş girilirse ilk indexi getirir
console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));
// console.log(a.length);
// console.log(a.charAt(43));
console.log(a.charAt(a.length-1));
console.log(a[a.length-1]);  */


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

//includes

/* var n = str.includes("simply");
var n1 = str.includes("Simply");
console.log(n);
console.log(n1);
 */

//indexof 
/* var n = str.indexOf("simply");
console.log(n);
console.log(str.indexOf('xa')); // -1
console.log(str.indexOf("Simply")); // -1
console.log(str.indexOf('m')); // ilk bulduğu sonucu döndürür
console.log(str.lastIndexOf('m')); // sondan başlar ilk bulduğu sonucu döndürür
 */

//replace

/* var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
/* console.log(s.replace('dummy', 'hello'));
 var str = s.replace('dummy', 'hello')
// console.log(s.replace('uuuuuu', 'hello'));
console.log(s);
console.log(str); */

//console.log(s.replace(/Dummy/i,'Hello')); //regex ile case sensitive 

//console.log(s.replace(/e/g, '--')); //regex tümünü değiştir. */

//search

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry. text";

// console.log(s.indexOf('text', 30));
// console.log(s.search('Text'));
// console.log(s.search(/Text/i));


// slice
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
// console.log(s.slice(0,5));
// console.log(s.slice(6));
console.log(s.slice(-31, -10));
console.log(s.slice(-31, 76));
console.log(s.slice(54, 76));
 */

//split
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
// console.log(s.split (' ')); // kelime kelime
console.log(s.split ('')); //eleman elaman
console.log(s.split ()); // komple tek array yapar
 */

//substr
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";
console.log(s.substr(22,10));
console.log(s.substr(22));
 */

//substring

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.substring(22,33));
// console.log(s.substring(33,22));
// console.log(s.substring(6,-202)); eksi index i her zaman sıfır kabul eder.

// toLowercase touppercase

/* var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleUpperCase('tr-TR'));
var Pangram = pangram.toLocaleUpperCase('tr-TR');
console.log(Pangram.toLowerCase());
console.log(Pangram.toLocaleLowerCase()); */

// trim
var s = "                 <-Welcome \t to Clarus\tway->                 "

console.log(s);

console.log(s.trim());
console.log(s.trimLeft());
console.log(s.trimRight());