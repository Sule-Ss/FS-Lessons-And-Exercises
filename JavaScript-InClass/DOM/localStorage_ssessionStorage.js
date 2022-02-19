/* ---- Oturum İşlemleri ------- */
/* 
localStorage    : Tarayıcı kapatılsa dahi clear yapılmadığı sürece silinmez.
ssessionStorage : Tarayıcı kapatıldığında veriler silinir.
*/
/* 
localStorage.getItem() // ekrana verileri çekmek için 
localStorage.setItem() //Ekrana çekilen veriler üzerinde oynama yapma(silme, ekleme vs..)
 */

localStorage.setItem("isim", "Sule");
console.log(localStorage.getItem("isim"));
localStorage.clear();
document.querySelector('<body>');