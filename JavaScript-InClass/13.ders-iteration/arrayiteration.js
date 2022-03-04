//! ITERATION

/* 
? klasik for >>> iterasyon metodlarına göre daha hızlı çalışır. break continue kullanılabilir
? for in >>> for(let i in arr){} döngüyü eleman sayısınca döndürür. typeof i string.
? for of >>> direkt elemanları döndürür.
*/

/*
Dizi iterasyon metodları:
? Array.forEach() >>> bir fonk parametre alır(callback). immutable(diziyi değiştirmez)
? Array.map() >>> Array.map() metodu, bir fonksiyonu parametre olarak alır ve orijinal dizinin kopyasını bu fonksiyona göre modifiye ederek döndürür.orijinal diziyi değiştirmez. ternar ve if statement lar kullanılabilir.
? Array.filter()
? Array.reduce()
break continue deyimleri bu dögülerde kullanılamaz.
 */

const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur"];

//! forEach(); Array.forEach ( function(şuankiDeğer, indis, dizi)) ilk parametre zorunlu >> array elemanının kendisini verir.
//return etmeyen  fonklara void fonk denir.(açıklama kısımlarında yazar)

//? 1. yöntem: harici arrow func

const print = (name) => {
  console.log(name);
};
students.forEach(print);

//? 2.yöntem : Anymous Method

students.forEach((name) => console.log(name));

const peyments = [100, 300, -200, 500, -400, 225, 1000, -700];

let sum = 0;
peyments.forEach((p) => (sum += p)); // return etmedik global bir değişkene veri yazdık. forEach void olduğu için.
console.log("SUM : ", sum);

// indis kullanılacağı zaman ikinci parametre kullanılır.
// Yerleri önemli ilk parametre : value, ikinci : indis, üçüncü : array >> 3ü kullanmak için 2olmak zorunda
peyments.forEach((p, i) => {
  p > 0 ? console.log(i, `You deposit ${p}`) : console.log(`You withraw ${p}`);
});

//! map() >>>> Bir dizinin kopyasını modifiye(transformasyon) edeceksek kullanılır. Orijinali bozulmaz. return eder.(aşağıda katAlınmışın içine)

const rakamlar = [3, 7, 17, 8, 9, 3, 0];
const katAlınmış = rakamlar.map((x) => x * 5);
console.log(katAlınmış);

const numbers = [2, 3, 5, 6, 8];
const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers); // numbers değişmedi

//exam:
//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------

let grades = [30, 50, 77, 38, 44, 80];
console.log(grades);

grades = grades.map((grade) =>
  (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2)
); // {} kullanırsak return kullanmamız lazım

console.log(grades);

/* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//-------------------------------------------------------*/

const words = ["mum", "kek", "gel", "ısı", "iyi"];

let polindoromic = words.map((word) =>
  word.split(" ").reverse().join("") === word ? word : null
);
console.log(polindoromic);

//! filter() >>> Bir dizinin bir kısmını seçerken kullanılır.

// const checkPalindrome = words.filter((word) =>[...word].reverse().join("") === word);
// console.log(checkPalindrome);

//PIPELINE (HAT)
// Dizi iterasyon metotları ardı ardına kullanılabilir. Böylelikle ardışık bir şekilde diziler işlenebilir.

//toUpperCase(filter ve map i birlikte kullanalım)

const checkPalindrome = words
  .filter((word) => [...word].reverse().join("") === word)
  .map((word) => word.toLocaleUpperCase())
  .forEach((word) => console.log(word));
// console.log(checkPalindrome);

//! reduce() >>> diziden tek bir değer almak istiyorsak ortalaması toplamı gibi.orijinal diziyi değiştirmez
//!Array.reduce( function(toplam, şuankiDeğer, indis, dizi))
//ardışık işlemlerde kullanmak mantıklı
//parametre olarak array de alabilir ancak klasik for döngüsüyle aynı olur.

const numbers2 = [1, 3, 5, 7];

const sum1 = numbers2.reduce((x, y) => x + y, 0); // object içerisnde reduce yapılıyorsa sıfır başlangıç değeri verilmeli
console.log(sum1);

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------
const salaries = [10000, 15000, 32000, 43000, 20000];

const sum2 = salaries.reduce((x, y) => x + y, 0) / salaries.length;

console.log(sum2);

const greaterThan20000 = salaries.filter((s) =>  s>20000).reduce((x,y) => x+y, 0);

console.log(greaterThan20000);


//! NESTED ARRAY ITERATION (JSON)

let personels = [
  {
    id: 1,
    name: "Ali",
    surname: "Yılmaz",
    job: "developer",
    age: 30,
    salary: 5000,
  },
  {
    id: 2,
    name: "Ayşe",
    surname: "Yılmaz",
    job: "tester",
    age: 35,
    salary: 3000,
  },
  {
    id: 3,
    name: "Mehmet",
    surname: "Öztürk",
    job: "team lead",
    age: 40,
    salary: 7000,
  },
  {
    id: 4,
    name: "Fatma",
    surname: "Ayaz",
    job: "developer",
    age: 26,
    salary: 4500,
  },

  {
    id: 5,
    name: "Can",
    surname: "Deniz",
    job: "tester",
    age: 24,
    salary: 3500,
  },
];

// console.log(personels);

//  exapmle1: display the job in the people array

personels.forEach((p)=> console.log(p.job));

//EXAMPLE2: increment the ages by one and store them to a new array.

const ages = personels.map((p) => p.age + 1);

console.log(ages);

// EXAMPLE3: Create new Object which consists of uppercased name + surname and incremented the age by 5.

const newPersonels= personels.map((p) =>{ // arrow func parantezi
  return { //obje parantezi
    name : p.name.toLocaleUpperCase() +"" + p.surname.toLocaleUpperCase(),
    age: p.age + 5,
  }
})

console.log(newPersonels);

//* EXAMPLE4: List the person's names whose age is under 33.

//* EXAMPLE5: Store the names and ages of the developers as a new Object.

//* EXAMPLE6: calculate avg age of  people.

//*EXAMPLE7: Increase the salaries of developers by 20% and
//* calculate sum of increased salary of devs.

//*EXAMPLE8: Increase the salaries of developers by 20% and
//* update the personels object.

//*EXAMPLE9: Delete personel whose id is equals to 4;
//* Exmple: deleteById(4)