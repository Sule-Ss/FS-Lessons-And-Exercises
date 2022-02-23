
// 1) 
/* 
First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
Sample Input:
javascriptloops
Sample Output:
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
Explanation
Observe the following:
Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .
*/
/* 
let text = "Javascriptloops";
let part1 = text.match(/[aeiou]/gi);
let part2 = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
let partLast = part1.concat(part2);

partLast.forEach(function (letter) {
  document.write(letter, "<br>");
});
 */



// 2) Write a Python/JavaScript code that counts how many vowels and constants a string has that a user entered.
/* 
let text = prompt("Enter a text : ").trim();
let part1 = text.match(/[aeiou]/gi);
let part2 = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
document.write("vowels : ", part1.length, "<br>", "constants : ", part2.length);
console.log(part1);
console.log(part2);
 */

/* 
const text = prompt('Please enter a string : ').toLowerCase();
const constants = 'bcçdfgğhjklmnpqrsştwxyz'.split('');
const vowels = 'aeıioöuü'.split('');
let constantCount = 0;
let vowelCount = 0;

for (char of text)
  if (vowels.includes(char)) vowelCount += 1;
  else if (constants.includes(char)) constantCount += 1;

console.log(`Your text has ${vowelCount} vowels and ${constantCount} constants`);
*/

/* 
let text = "Welcome to Full-Stack path"
const vovels = "aeiou"
let [vovelsInText, constantsInText] = [0, 0]

for (let letter of text.toLowerCase()){
    if (letter.match(/[a-z]/)) {
        vovels.includes(letter) ? vovelsInText++ : constantsInText++
    }
}

console.log(`Vovels: ${vovelsInText}
Constants: ${constantsInText}`)
*/



// 3) Try to find out if a number you get from the user is perfect. A number is called a "perfect number" 
//    if the sum of its divisors is equal to itself. For example, 6 is a perfect number. (1 + 2 + 3 = 6)
/* 
function perfectNumbers() {
  let total = 0;
  let num = Number(prompt("Enter a number :"));

  for (let i = 1; i < num; i++) {
      if (num % i === 0) {
          total += i;
      }
  }
  if (total === num) {
      return document.write(`${num} is a perfect number`);
  } else {
      return document.write(`${num} is not a perfect number`);
  }
}
perfectNumbers(); */


// 4)
// Try to find out if a number you get from the user is perfect. 
// A number is called a "perfect number" if the sum of its divisors is equal to itself. 
// For example, 6 is a perfect number. (1 + 2 + 3 = 6)
/* 
function perfectNumbers() {
  let total = 0;
  let num = Number(prompt("Enter a number :"));

  for (let i = 1; i < num; i++) {
      if (num % i === 0) {
          total += i;
      }
  }
  if (total === num) {
      return document.write(`${num} is a perfect number`);
  } else {
      return document.write(`${num} is not a perfect number`);
  }
}
perfectNumbers(); */

// 5)

/* 
Ask user to enter a word, a separator and number of repetitions. Write a Python/JS code displaying the word with repetition times and having each word separated with separator character.
For example, if user entered word as Tina, separator as ! and repetitions as 3 expected output is "Tina!Tina!Tina"  
Be careful there is no separator character at the end.
*/

/* 
let repeatN = +prompt("repeat : ");
 let string = prompt("string : ");
 let sep = prompt("seperator : ");

 let a = string.concat(sep).repeat(repeatN);
 let b = a.split("");
 b.pop();
 console.log(b.join(""));
*/

/* 
let word = prompt("Enter a word:", "word")
let seperator = prompt("Enter a seperator:", ",")
let repetition = prompt("Enter a number:", "3")

console.log(Array(+repetition).fill(word).join(seperator))
*/

/* 
function myFunction(){
    let text = prompt("enter the text");
    let separator = prompt("enter the separator");
    let repeat = +prompt("enter the repeatitions")
    let newText = "";
    for(let i = 0;i<repeat;i++){
        if(i+1 != repeat){
            newText += text + separator;
        }else{
            newText += text;
        }
          
    }
    return newText;
}
*/

// 6)

/* 
Write a Python/JS code to sort the list/array below without using .sort() method of list/array.
elements of list/array = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
Expected output:
[2, 11, 12, 45, 77, 99, 333, 999, 8982]
*/

/* 
const list = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
for (let i = 0; i < list.length - 1; i++)
  for (let j = i + 1; j < list.length; j++)
    if (list[i] > list[j]) {
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
console.log(list);
*/

/* 
let elements  = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let new_list = [];
let lengthOfElements = elements.length;

for (let i = 0; i < lengthOfElements; i++) {
    new_list.push(Math.max(...elements))
    elements.splice(elements.indexOf(Math.max(...elements)), 1)
}
console.log(new_list);
*/

// 7)

/* 
Write a Python/JS code to find greatest common divisor (gcd) of 2 numbers.  
Example:  
gcd of 6, 9 ---> 3  
gcd of 120, 90 --> 30
*/

/* 
function GCD() {
            let num1 = prompt("Enter a number 1 :")
            let num2 = prompt("Enter a number 2 :")
            let total;
            if (num1 > num2) {let div = num2;} 
            else {div = num1;}
            for (let i = 1; i < div + 1; i++) {
                if (num1 % i == 0 && num2 % i == 0) {
                    total = i;
                }
            }
            return `GCD : ${total}`;
        }
        alert(GCD());
*/

/* 
function obeb(num1, num2) {
    var res = 1;
    var max = [num1,num2].sort((a, b) => b - a);
        for (let i = 1; i <= max[0]; i++) {
            if (num1 % i == 0 && num2 % i == 0 && i > res ) {
                res = i;
            } else {
                continue;
            }  
    }
    return res;
};
console.log(obeb(6,9));
*/

/* 
function great(x,y){
    let list = [];
    let array = [x,y];
    array.sort((a,b)=> b-a);
    for(let i = 1; i < array[0]; i++ ){
        if(array[0]%i === 0 && array[1]%i === 0){
            list.push(i);
            list.sort((a,b)=> b-a);
            
        }
        
    }
    return console.log(list[0]);
}

great(6,9)
*/

/* 
function gcd(x, y) {
  const min = x > y ? y : x;
  for (let i = min; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
}
console.log(gcd(30, 60));
*/

/* 
const gcd = (x, y) => {
  for (let i = x > y ? y : x; i > 0; i--) if (!(x % i || y % i)) return i;
};
console.log(gcd(90, 60));
*/

// 8)

/* 
Write a Python/JS code to find the numbers that are grater than 150 at below text, and sort these numbers.
text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances."
*/

/* 
let text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ");
        let arrayNumber = [];
        for (let i = 0; i < text.length; i++) {
            if (isNaN(text[i])) {
                continue;
            } else if (text[i] > 150) {
                arrayNumber.push(text[i]);
            }
        }
        console.log(arrayNumber.sort((a, b) => a - b));
*/

/* 
const text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ");

let numbers = [];
for (const i of text) {if (+i > 150) { numbers.push(+i);}}
console.log(numbers.sort((a,b)=> a-b));
*/

/* 
text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances."

console.log(text.split(" ").filter(word => !isNaN(word) && word > 150).sort((a,b) => a - b))
*/

// 8)

/* 
This is an interview question asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

/* 
let liste = [10, 15, 3, 7] ;
let number = 17;
let i,j;
for(i of liste) {
    for(j of liste){
        if(i + j == number && i > j){
            console.log(`${i} + ${j} = ${number}`);
        }
    }
}
*/

/* 
let liste = [10, 15, 3, 7];
let k = 17;
for (let i = 0; i < liste.length; i++) {
    for (let j = 0; j < liste.length; j++) {
        if(liste[i] + liste[j] == k && liste[i] > liste[j]){
            console.log(` ${liste[i]} + ${liste[j]} = ${k}`);
        }  
    }  
}
*/

// 9)

/* 
This is an interview question asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
*/

/* 
const array = [1, 2, 3, 4, 5]
const newArray = []

for(let i=0; i<array.length; i++){
    let temp = array.shift()
    newArray.push(array.reduce((a, b) => a * b))
    array.push(temp)
}

console.log(newArray)
*/

/* 
function newArray(myList) {
    newList=[];
    myList.forEach(e => { let num = 1;
        myList.forEach(k => {e!=k ? num*=k :""});
        newList.push(num)});
    return newList
}
console.log(newArray([1, 2, 3, 4, 5]))
*/

/* 
function productNumbers(array){
            let array2 = []
            for (let i = 0; i < array.length; i++) {
                let number = 1
                for (let j = 0; j < array.length; j++) {
                    if(i !== j){
                        number *= array[j]
                    }
                }
                array2.push(number)
            }
            return array2
        }

        array = [1, 2, 3, 4, 5]
        console.log(productNumbers(array));
*/