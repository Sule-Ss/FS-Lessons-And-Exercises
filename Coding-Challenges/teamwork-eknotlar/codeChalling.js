/* function binToDec(bin) {
  let list = Array.from(String(bin)).reverse();
  let newList = list
    .map((item, index) => {
      let p = 1;
      for (let i = 0; i < index; i++) {
        p *= 2;
      }
      return item * p;
    })
    .reduce((item0, item1) => {
      return item0 + item1;
    });

  return newList;
} */

function binToDec(bin) {
  let list = Array.from(String(bin)).reverse();
  console.log(list);
  let newList = list.map((item, index) => {
      return item * (2 ** index);
    })
    .reduce((item0, item1) => {
      return item0 + item1;
    });

  return newList;
}

/* console.log(abinToDec(11110));
console.log(binToDec(101001));
console.log(abinToDec(101001)); */
// console.log(binToDec(11110));
// console.log(binToDec(10110));


function decToBin(dec) {
  let list = [];
  while (dec >= 2) {
    list.push(dec % 2);
    dec = Math.floor(dec / 2);
  }
  list.push(1);
  return list.reverse().join("");
}

console.log(decToBin(73));
// console.log(decToBin(30)); 

// let a = 10;
// let b = [];
// while (a > 2) {
//     console.log(a %2);
//     b.push(a%2)
//     a = Math.floor(a / 2)
// }
// console.log(b);
