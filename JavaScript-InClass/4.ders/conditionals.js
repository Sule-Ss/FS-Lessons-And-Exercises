let score = 49;

if (score >= 50) {
  console.log("Tebrikler Geçtiniz!");
}

/* if (score >= 50)  console.log('Tebrikler Geçtiniz!');  tek satırlık if bu şekilde de yazılabilir. */

/* if çalışmıyorsa alt satırdan devam eder 'kod sonu' yazdorolır. */
// console.log('kod sonu');

// let score = prompt('Notunuzu girin : ') kullanıcıdan da alınabilir.

let grade = score >= 50;

if (grade) console.log("Tebrikler notunuz 51 geçtiniz!");

let grade2 = 48;
if (grade2 >= 50) {
  console.log(`Tebrikler notunuz ${grade2} geçtiniz`);
} else {
  console.log("üzgünüz kalldınız");
}

/* ----- Ternary if ------------ */

var score3 = 49;

/* nested ternary : */
score3 >= 80
  ? console.log("Tebrikler çok başarılı bir öğrencisiniz!")
  : score3 >= 50
  ? console.log("Tebrikler geçtiniz")
  : console.log("Üzgünüm Kaldınız");

var text;
var fruits = "limon";

// var fruits = prompt('Enter your favorite fruit: ')

// toLowerCase() >>> stringin büütn karakterlerini küçük harfe çevirir.

/* switch (fruits) {
  case "Banana":
    text = "Banana is good";
    break;
  case "limon":
  case "Orange":
    text = `I am not a fan of ${fruits}`;
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
    break;
}
console.log(text); */

/* Birden fazla case den aynı sonucu almak istiyorsak üst üste yazılabilir. */

var gunler = "Perşembe";
var text;

switch (gunler.toLowerCase()) {
  case "pazartesi":
  case "çarşamba":
  case "perşembe":
    text = "in class";
    break;
  case "salı":
  case "cuma":
    text = "Teamwork";
    break;
  case "pazar":
    text = "tatil";
    break;
  default:
    text = "yanlış gün girildi";
    break;
}

console.log(text);

/* switch içinde nested if statement kullanılabilir. */

/* yıllara göre ayların gün sayısı :  */

var year = 2152;
var month = 2;
var dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) dayCount = 29;
    else dayCount = 28;
    break;
  default:
    dayCount = -1; // invalid month
}
console.log(dayCount); // 29
