/* 
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

/* 
charAt()	    Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	    Returns two or more joined strings
endsWith()	    Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	    Returns if a string contains a specified value
indexOf()	    Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	        Searches a string for a value, or a regular expression, and returns the matches
repeat()	    Returns a new string with a number of copies of a string
replace()	    Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()	    Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	        Extracts a part of a string and returns a new string
split()	        Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	    Extracts a number of characters from a string, from a start index (position)
substring()	    Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	    Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	        Returns a string with removed whitespaces
valueOf()	    Returns the primitive value of a string or a string object
*/

/* 
JavaScript String Properties :

constructor	    Returns the string's constructor function
length	        Returns the length of a string
prototype	    Allows you to add properties and methods to an object
*/

let str1 = "Hello ";
let str2 = "World";
let str3 = `${str1 + str2}`;

console.log(typeof str1, str1); // string Hello
console.log(typeof str2, str2); // string World
console.log(typeof str3, str3); // string Hello World

let str4 = new String("A string object");

console.log(typeof str4, str4); // object. Çıktıda verilen aşağı ok ile object in ayrıntılı özelliklerini görebiliriz.


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


var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

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
