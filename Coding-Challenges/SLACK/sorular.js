//? 1)
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

//? 2)
// Write a Python/JavaScript code that counts how many vowels and constants a string has that a user entered.
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

//? 3)
// Try to find out if a number you get from the user is perfect. A number is called a "perfect number"
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

//? 4)
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

//? 5)

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

//? 6)

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

//? 7)

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

//? 8)

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

//? 9)

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

//? 10)

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

//? 11)

/* 
This is an interview question asked by Twitter.
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
*/

/* let a = "de";
let array = ["dog", "deer", "deal"];
function matchFunc(array) {
  let i;
  let array2 = [];
  for (i of array) {
    if (i.match(a)) {
      array2.push(i);
    }
  }
  console.log(array2);
}
matchFunc(array); //['deer', 'deal']
 */

//? 12)

/* 
This is an interview question asked by Amazon.
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
For example, if N is 4, then there are 5 unique ways:  
1, 1, 1, 1  
2, 1, 1  
1, 2, 1  
1, 1, 2  
2, 2
*/

/* 
function climbStairs(n) {
    if (n <=1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(0));    // 1
console.log(climbStairs(1));    // 1
console.log(climbStairs(2));    // 2
console.log(climbStairs(3));    // 3
console.log(climbStairs(4));    // 5
console.log(climbStairs(5));    // 8
console.log(climbStairs(6));    // 13


Python

def climb_stairs(n):
    if n <= 1:
        return 1
    return climb_stairs(n - 1) + climb_stairs(n - 2)

print(climb_stairs(0))
print(climb_stairs(1))
print(climb_stairs(2))
print(climb_stairs(3))
print(climb_stairs(4))
print(climb_stairs(5))
print(climb_stairs(6))
*/

/* 
function fact(n){
    if (n === 1 || n===0) return 1;
    return n * fact(n - 1) 
}

function staircase(num){
    let numArray = Array(num).fill(1);
    let result = 1;

    while(numArray.includes(1)){
        numArray.pop()
        for(let i=0; i<numArray.length; i++){
            if(numArray[i] === 1){
                numArray[i] = 2;
                break;
            }
        }
        console.log(numArray)
        let ones = numArray.filter(x => x===1).length
        let twos = numArray.filter(x => x===2).length

        ones + 2 * twos === num && (result += fact(numArray.length) / (fact(ones) * fact(twos)))
    }
    return result;

}

console.log(staircase(6))
*/

//? 13)

/* 
This is an interview question asked by Amazon.
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

/* 
function longestSubstring(s, k) {
    let _s = new Map();
    for (const i in s) {
        for (const j in s) {
            if (new Set(s.slice(i, Number(j) + 1)).size == k) {
                _s.set(s.slice(i, Number(j) + 1).length, s.slice(i, Number(j) + 1))
            }
        }
    }
    return _s.get(Math.max(..._s.keys()))
}
console.log(longestSubstring("abcba",2))
PYTHON
def longestSubstring(s,k):
  _s=[(len(s[i:j+1]),s[i:j+1]) for i in range(len(s)) for j in range(len(s)) if len(set(s[i:j+1]))==k]
  return max(_s)[1]
longestSubstring("abcba",2)
*/

/* 
let k = 3;
let s = "abdcbabcdbba";
let [longest, temp] = ["", ""]

for(let letter of s){
    if(new Set(temp + letter).size > k){
        while(new Set(temp).size >= k){
            temp = temp.slice(1);
        }
    }
    temp += letter;
    (temp.length > longest.length) && (longest = temp)
}

console.log(longest)
*/

//? 14)

/* 
This is an interview question
Longest Substring Without Repeating Characters
Level: Medium
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/* 
let text = "abcabcbb";
let [longest, temp] = ["", ""]

for(let letter of text){
   while(temp.includes(letter)){
      temp = temp.slice(1);
   }
   temp += letter;
   (temp.length > longest.length) && (longest = temp)
}

console.log(longest)
*/

/* 
function longestPiece(s){
    let longest = s.slice(0,1);
    for (let i = 0; i <= s.length; i++) {
        for (let j = s.length; j >= i; j--) {
            longest = (new Set(s.slice(i,j)).size == s.slice(i,j).length 
                    && s.slice(i,j).length > longest.length) 
                    ? s.slice(i,j) : longest;
        }
    }
    console.log(`The answer is "${longest}", with the length of ${longest.length}.`);
}

longestPiece("abcabcbb");   // The answer is "abc", with the length of 3.
longestPiece("bbbbb");      // The answer is "b", with the length of 1.
longestPiece("pwwkew");     // The answer is "wke", with the length of 3.
*/

/* 
function longestSub(str) {
    let words = str.split('')
    words = [...new Set(words)];
    let newStr = words.join('')
    return newStr;
}
longestSub('aaaav')
*/

//? 15)
/* 
This is an interview question asked by Google.
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
10 = max(10, 5, 2) 
7 = max(5, 2, 7) 
8 = max(2, 7, 8)
8 = max(7, 8, 7)
*/

/* 
let arr = [10, 5, 2, 7, 8, 7];
        let k = 3;
        function maxSubArr(arr, k){
            let result = [];
            for (let i = 0; i <= arr.length; i++) {
                if (k + i <= arr.length) {
                    let subarr = arr.slice(i, i + k);
                    let maxNum = Math.max(...subarr);
                    result.push(maxNum);
                }
            }
        return result;
        }
        console.log(maxSubArr(arr,k));
*/

/* 
function maxOfSubArrays(array,k){
    for (let i = 0; i < array.length-k+1; i++) {
        console.log(Math.max(...array.slice(i, k + i)), `= max(${array.slice(i, k + i)})`); 
    }
}

maxOfSubArrays([10, 5, 2, 7, 8, 7], 3);
*/

//? 16)

/* 
This is an interview question asked by Facebook.
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
For example, given the string "([])", you should return true.
Given the string "([)]" or "((()", you should return false.
*/

/* 
let str1 = "(([[]))";
let str2 = "([())]";
let str3 = "([([])])";
function check(str) {
  if (str.length % 2 == 0) {
    let list = [];
    for (let i = 0; i < str.length / 2; i++) {
      list.push(str[i] + str.at(-i - 1));
    }
    for (let j of list) {
      if (j == "()" || j == "[]") {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
console.log(check(str3));
*/

/* 
function wellFormedString(str){
      let s = str;
      while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
            let temp = s.replace("()","").replace("[]","").replace("{}","");
            s = temp;
      }
      return s == "";
}

console.log(wellFormedString("([{({})}]({}))")) //? Output: True
console.log(wellFormedString("((()"))           //? Output: False
console.log(wellFormedString("([)]"))           //? Output: False
console.log(wellFormedString("([])"))           //? Output: True
*/

//? 17)

/* 
This is an interview question asked by Facebook.
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
You can assume that the messages are decodable. For example, '001' is not allowed.
*/
/* 
console.log(factorial(5));

function countEncoding(s) {
  if (s.startsWith("0")) return 0;
  if (s.length <= 1) return 1;

  let total = 0;

  if (+s.slice(0, 2) <= 26) {
    total += countEncoding(s.slice(2));
    total += countEncoding(s.slice(1));
    return total;
  }
}

console.log(countEncoding("11211")); */
/* 
function countEncoding2(s) {
  if (s.startsWith("0")) return 0;
  const lst = Array(s.length + 1).fill(0, 2);
  [lst[0], lst[1]] = [1, 1];
  for (let i = 2; i < s.length + 1; i++) {
    lst[i] = 0;
    if (+s[i - 1] > 0) lst[i] = lst[i - 1];
    const twoDigit = +s.slice(i - 2, i);
    if (twoDigit <= 26 && twoDigit >= 10) lst[i] += lst[i - 2];
  }

  return lst[lst.length - 1];
}

console.log(countEncoding2("111")); */

//? 18)

/* 
This is an interview question asked by Airbnb.
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
For example,
[2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
[5, 1, 1, 5] should return 10, since we pick 5 and 5.
*/
/* 
const largestNonAdjacent = (arr) => {
  let n = arr.length;
  let maxNum = 0;
  if (n == 1) return arr[0];
  if (n == 2) return Math.max(arr[n - 1], arr[n - 2]);
  else {
    maxNum = Math.max(
      largestNonAdjacent(arr.slice(0, n - 1)),
      arr[n - 1] + largestNonAdjacent(arr.slice(0, n - 2))
    );
  }
  return maxNum;
};

console.log(largestNonAdjacent([2, 4, 6, 2, 5])); // 2 + 6 + 5 = 13
console.log(largestNonAdjacent([5, 1, 1, 5])); // 5 + 5     = 10
console.log(largestNonAdjacent([2, 4, 3, 1, 2, 8, 5])); // 4 + 1 + 8 = 13
console.log(largestNonAdjacent([1, 0, 3, 9, 2])); // 1 + 9     = 10

 */

/* function result(arr) {
  let newArr = arr;
  let sumarr = [];
  let a = [];

  for (let i = 0; i < newArr.length; i = i + 1) {
    sumarr.push(sum(arr));
    sumarr.push(sum3(arr));
    sumarr.push(Negsum(arr));
    sumarr.push(Negsum3(arr));
    arr.shift();
  }
  for (const i of sumarr) {
    a.push(i[0]);
  }
  return Math.max(...a);
}
console.log(result([-2, 0, 3, 6, 7, 9]));

function sum(arr) {
  let first = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    first += arr[i];
  }

  newArr.push(first);

  return newArr;
}
function sum3(arr) {
  let first = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + 3) {
    first += arr[i];
  }

  newArr.push(first);

  return newArr;
}
function Negsum(arr) {
  let first = 0;
  let newArr = [];
  for (let i = arr.length - 1; i > 0; i = i - 2) {
    first += arr[i];
  }

  newArr.push(first);

  return newArr;
}

function Negsum3(arr) {
  let first = 0;
  let newArr = [];
  for (let i = arr.length - 1; i > 0; i = i - 3) {
    first += arr[i];
  }

  newArr.push(first);

  return newArr;
}
 */

/* const sumFunc = (arr) => {
  if (arr.length === 1 || arr.length === 2) return Math.max(...arr);

  return Math.max(arr[0] + sumFunc(arr.slice(2)), sumFunc(arr.slice(1)));
};

console.log(sumFunc([3, 5, 7, 9, 8, 3]));
 */