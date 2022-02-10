
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



// 4) Try to find out if a number you get from the user is perfect. 
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