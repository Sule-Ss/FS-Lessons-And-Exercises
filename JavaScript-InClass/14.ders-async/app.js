//! Asenkron (Asynchronous) Programlama Nedir?

/* 
Kod akışının sırayla işlemediği, işlemlerin birbirini beklemediği, 
kod akışının işlem durumlarına göre devam ettiği programlamaya Asenkron Programlama denir.
*/

/* 
promises :  callback'lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır. 
async/await : ES7 ile birlikte asenkron programlama yapmayı daha da kolay hale getiren anahtar kelimelerdir.
async >> indir ama hemen icra et. önce html i sonra js i yükler.
defer >> işlemi erteler. html içindeki defer dosyasını indirir ama html dosyası yüklenene kadar bekler.
*/

/* 
JS engine aynı anda tek işlem yapabiliyor.
Async işlemleri Browser kendi bünyesindeki WEB API ile yapıyor. JS engine ile yapmıyor / yapamıyor.
*/

/* 
MultiProcessing yapısında CPU tarafından bütün processlerin aynı anda çalışması sağlanır. 
MultiThreading yapısı ile bütün işlem parçacıklarının aynı anda çalışmaları sağlanır.
javascript singlethreading tir.
*/

/* 
?async Callbacks : Callbackler genellikle asynchronous işlemler tamamlandıktan sonra kod yürütülmesine devam etmek için kullanılır.
*/

//? SetTimeOut(function, milliseconds); oluşturulan fonk/metodu belirlenen saniyeler içinde bir kere yürütür.
//zaman parametresi verilmezse işlemler bittikten sonra ilk boşlukta çalıştırır.
// iş listesinin en sonuna atıyor (senkron olanların sonuna)
// ?setInterval(); oluşturulan fonk/metodun belirlenen milisaniye süresince sürekli çalışmasını sağlar

//clearTimeOut(); setTimeout u iptal eder.
//clearInterval(); setInterval ı iptal eder.

/* 
Diyelim 10 saniye bekleyip bir fonksiyonu çalıştırmak istiyoruz.
Burada 2 iş var.
1)Belli bir süre bekleme işi.
2)Süre dolduktan sonra çalışacak fonksiyon
Belli bir süre bekleme işini JS engine yaptırırsak kodumuz kilitlenir. 10 saniye ekranda kullanıcı hiç bir işlem yapamaz. Bu istenen bir durum değil.
O nedenle bu 10 saniye bekleme işlemi Browser WEB API tarafından yapılıyor.
10 saniye bekleme işi WEB API tarafından tamamlanınca haber geliyor. Bekleme işi bitti diye. O zaman görevin ikinci kısmında yani callback'in çalıştırılması kısmına geçiliyor.
Callback yine JS engine tarafından çalıştırılıyor.
İşte tüm bu sürece bir ID numarası veriliyor. Dilersek bu ID numarası ile bu süreci sonlandırabiliriz tamamlanmadan önce.
*/

console.log('» index.js is running');
/* 
let id = setTimeout(() => {
  console.log('» async programming is amazing');
}, 2000);
console.log(id);
clearTimeout(id);
console.log('continuing...');
let id2 = setTimeout(() => {
  console.log('»22 async programming is amazing');
}, 2000);
console.log(id2);
 */

//? an example

const slowTask = () => {
  let i = 0;
  let result = { firstName: 'John', lastName: 'Doe' };
  do {
    i++;
    // some long operation
  } while (i < 1_000_000_000);
  return result;
};

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

// console.log('» A..1');
// wait(3000); // 1 second wait
// console.log('» ...2');
// // setTimeout(() => {
// //   let res = slowTask();
// //   console.log(res);
// // });
// alert('!');
// console.log('» ...3');
// console.log('» ...4');
/* settimeout callstack de diğer functionlarla yada consollarla aynı stackde bulunmuyor önce callstacklere gıdıyor sonra settimeout un oldugu stacke gıdıyor yanı nereye yazarsak yazalım settımeoutu onu en son calıstırır */

//? synchronous example
console.time('»» olc'); // başlangıcın zaman ölçümü. string girilmezse yerine default yazar.
console.log('hello');
wait(1500);
console.timeLog('»» olc'); // süre tutmaya başladıktan sonra geçen süre
console.log('world');
console.timeEnd('»» olc');

//? timeout example
// console.time('»» time elapsed');
// setTimeout(() => {
//   console.warn('this message is printed after 2 seconds');
//   console.timeEnd('»» time elapsed');
// }, 2000);
// wait(2000);
// console.timeLog('»» time elapsed');


//? another example
console.time('»» setTimeout example');
console.timeLog('»» setTimeout example');
setTimeout(() => {
  console.error('this is the first message');
  console.timeEnd('»» setTimeout example');
}, 4000);
setTimeout(() => {
  console.warn('this is the second message');
  console.timeLog('»» setTimeout example');
}, 3000);
setTimeout(() => {
  console.warn('this is the third message');
  console.timeLog('»» setTimeout example');
}, 1000);

//! callback hell (okunurluğu düşük)

// setTimeout(() => {
//   console.log('john:Hi');
//   setTimeout(() => {
//     console.warn('Sarah: Hello');
//     setTimeout(() => {
//       console.log('John: How Are you?');
//       setTimeout(() => {
//         console.warn('Sarah: Fine and you?');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

console.time('»» callback hell example');
console.timeLog('»» callback hell example');
setTimeout(() => {
  console.warn('this is the first message');
  setTimeout(() => {
    console.warn('this is the second message');
    setTimeout(() => {
      console.warn('this is the third message');
      setTimeout(() => {
        console.warn('this is the fourth message');
        setTimeout(() => {
          console.warn('this is the fifth message');
          console.timeEnd('»» callback hell example');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//* SETINTERVAL
// function hello() {
//   console.log('Hello world');
// }
// setInterval(hello, 2000);

// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }
// let display = setInterval(showTime, 5000);

// program to stop the setInterval() method after five times
// let count = 0;
// let interval = setInterval(function () {
//   count += 1;
//   if (count === 5) {
//     clearInterval(interval);
//   }
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }, 2000);

// let count = 10;
// let intervalId = setInterval(function () {
//   if (count === 0) {
//     console.log('Time is over');
//     clearInterval(intervalId);
//   } else {
//     console.log(count);
//     count--;
//   }
// }, 1000);

//? setInterval example

const tick = () => {
  counter++;
  console.warn(`» ${counter}`);
  if (counter == 5) {
    clearInterval(intervalId);
  }
};
const intervalId = setInterval(tick, 1000);

let counter = 0;

//todo: özet:
/* 
Beklemek, resim yüklemek gibi işler asenkron. web api de yapılır.
settimeout >>> callback queue ya gönderir. en az bizim atadığımız zaman kadar bekleyecek.
event loop >>> öncelik sıralaması yapar. 
fetch() >>> promise yani vip. 
event loop önce vip kuyruğa bakar yapılacak iş varsa stack e koyar. sonra callback queue bakar.
Tüm bunların nedeni singlethreading olmasıdır.
Dom() her zaman web api içinde kalır. callback queue ya geleceğinin garantisi yok.
*/