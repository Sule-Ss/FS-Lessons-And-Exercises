//! ITERATION

/* 
? klasik for >>> iterasyon metodlarına göre daha hızlı çalışır. break continue kullanılabilir
? for in >>> for(let i in arr){} döngüyü eleman sayısınca döndürür. typeof i string.
? for of >>> direkt elemanları döndürür.
*/

/*
Dizi iterasyon metodları:
? Array.forEach() >>> bir fonk parametre alır(callback). immutable(dizisi değiştirmez)
? Array.map()
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

const numbers = [2,3,5,6,8];
const doubled = numbers.map((n)=> n*2);
console.log(doubled, numbers); // numbers değişmedi

//! filter() >>> Bir dizinin bir kısmını seçerken

//! reduce() >>> diziden bir değer almak istiyorsak ortalaması toplamı gibi.