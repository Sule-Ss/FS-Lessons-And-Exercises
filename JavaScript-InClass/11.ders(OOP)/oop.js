/* 
Js de primitive ler dışında herşey object.
object içinde tutulan verilere property denir. Array gibi sıralı olmak zorunda değil.
*/

console.log("» index.js is running");

const person = {
  firstName: "Barry",
  lastName: "Mitchell",
  birthYear: 1977,
  skills: ["JS", "AWS", "Docker", "Python"],
  employed: true,
};

// console.log(person);
console.log(person.firstName); // Barry
console.log(person["birthYear"]); // 1977

console.log(person.midName); // undefined
console.log(person["2022"]); // undefined

let year = 2022;
console.log(person[year]); //undefined
console.log(person.year); // undefined

let tag = "Year";
console.log(person["birth" + tag]); //1977 "birthYear" ı döndürdü."

person.birthYear = 1979;
// console.log(person);

// person.firstName = 'Adam'; // firtName i değiştirir.
person.firstname = 'Adam' // yeni atama yapar.
console.log(person);
console.log(delete person.firstname); 

const comments = [
    {userName: 'Mark', comment : 'very good', likes:99},
    {userName: 'John', comment : 'bla bla bla', likes:2}
]

console.log(comments);

for(const key of Object.keys(person)){
    console.log(key); 
}
for(const key of Object.values(person)){
    console.log(key); 
}

for (const [key,value] of Object.entries(person)) {
    console.log(`${key} :: ${value}`);
};

/* ------- Methods -----------*/

const person2 = {
    firstName: "Barry",
    lastName: "Mitchell",
    birthYear: 1977,
    skills: ["JS", "AWS", "Docker", "Python"],
    employed: true,
    calcAgeBad : function(bYear){
        return 2022-bYear;},
    calcAgeNice() {
        return 2022 - this.birthYear;
    }
    
  };

  console.log(person2.calcAgeBad(1980)); // 42
  console.log(person2.calcAgeNice()); // 45