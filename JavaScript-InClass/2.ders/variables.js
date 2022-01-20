console.log("object"); /* clg + tab kısayol */

var x = 3;
console.log(x);

var x = 7,
  y = 5;
console.log(x + y);

console.log({ y }); /* konsol okunaklığını artırır.{} */
console.log({ x });

y = x;
console.log({ y });

/* var alert = "Merhaba"
console.log(alert); alert i değişken olarak atadığımız için tekrar fonk. olarak çağıramayız. Ayrılmış kelimelere dikkat! */
// alert("Hello!");

/* Consola window yazarak fonksiyon listesini görebiliriz. */

/* ------ LET DEĞİŞKENİ --------- */

/* Tanımlandığı Scope da çalışır. Scope-parantez dışına çıkınca silinir. Çalışma hızını artırır. */

/* let ile tanımlanan bir değişken tanımlandığı yerden daha derin her yerde ulaşılabilir ve değiştirilebilir, ancak yukarı seviyede ulaşılamaz. (block scope)  */

/* Pyhton'da Function Scope var. Yani function içinde tanımlanan değişkenler ancak function içinde kullanılabilir. Function dışından erişim sağlayamazsınız.
JS'de ise Block Scope var. Yani block içinde tanımlanan değişkenler ancak block içinde kullanılabilir. Block dışından erişim sağlayamazsınız.
Global scope'taki ya da bir üst scope'taki değişkenlere o scope'un bütün alt scope'larından erişim sağlanabilir. */
var a = "Global";
console.log(a);

{
  let a = "Scope"; /* Tanımlama da hata olursa/let yazılmazsa global bozulur. */

  console.log(a);
  {
    let a =
      "İnner scope"; /* Değişken tanımlanmazsa bir üstten scope u çeker. */
    console.log(a);
  }
}

console.log(a);

/* let c = 7;
console.log(c);

let c = 5;
console.log(c); Hata verir */

/* var a = 5;
let aa = 3; 
 */


/* ------CONST DEĞİŞKENİ --------- */
/* const h = 'constant variable';
console.log(h); */

// h = 2 ; hata verir bir daha atama yapılamaz.


/* ----HOSTING ----- */
console.log(d);
var d;  /* Hata vermez. undefined verir. */

// console.log(e); is not defined. Tanımlanımadı

/* console.log(f);
let f = 5; let hoisting değildir. */
