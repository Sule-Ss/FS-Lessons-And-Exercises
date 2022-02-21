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

  /* ------- this -------- */
  /* 
  4 farklı yerde bulunur : 
  1) object içerisnde methodda kullanıldığında noktadan öncesi neyse this odur.
  2) Browser ın bize önerdiği object. Herhangibir fonk tanımlıyorsak window nesnesi?
  3) arrow func ile tanımlandıysa bir üstündekinin this ini alır. her zaman kendine ait bir this  i yok.
  4) event listener : o an hangi nesneyse onu döndürür.
  4) new, call, apply, bind kullanım farkları var. mevcut this belirsizse atama yapmak için kullanılır.
  */

  // --- this examples

  function f2(){
      console.log(this);
  }
  f2(); // window nesnesi döndürür 2) için örnek

  // normal func için bulunduğu nesneyi döndürür: 
  const calcAge = function (birthYear){
      console.log('regular functtion in global scope');
      console.log(this);
      console.log(2022 - birthYear);
  }
  calcAge(1977); // ilk clg,  window nesnesi,  45

 // arrow func için kendi nesnesi olmadığı için bir üst nesneyi döndürür: 
 const calcAgeArrow =  (birthYear) =>{
    console.log('regular functtion in global scope');
    console.log(this);
    console.log(2022 - birthYear);
}

calcAgeArrow(1977); 

const teacher = {
    birthYear: 1985,
    calcAge() {
      console.log('Regular Function in Object');
      console.log(this);
      console.log(2022 - this.birthYear);
    },
    calcAgeArrow: () => {
      console.log('Arrow Function in Object');
      console.log(this);
      console.log(2022 - this.birthYear);
    },
    calcAgeDelayed() {
      setTimeout(function () {
        console.log('Regular Function in setTimeout');
        console.log(this);
        this.calcAge();
      }, 2000);
    },
    calcAgeDelayedArrow: function () {
      setTimeout(() => {
        console.log('Arrow Function in setTimeout');
        console.log(this);
        this.calcAge();
      }, 2000);
    },
  };
  
  const student = {
    birthYear: 1995,
  };
  
  student.calcAge = teacher.calcAge;
  
  student.calcAge();
  
  const myFunc = teacher.calcAge;
  
  teacher.calcAge();
  myFunc();
  
  // teacher.calcAge();
  // teacher.calcAgeArrow();
  // teacher.calcAgeDelayed();
  // teacher.calcAgeDelayedArrow();
  
  let anObject = {
    firstName: 'John',
    age: 30,
    isMarried: false,
    introduce: () => {
      return `${this.firstName} is ${this.age} years old.`;
    },
    introduce2: function () {
      return `${this.firstName} is ${this.age} years old.`;
    },
  };
  
  console.log(anObject.introduce());
  console.log(anObject.introduce2());