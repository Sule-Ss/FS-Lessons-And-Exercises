// Dom seçiciler :

/* ------ id Seçiciler --------- */

var deger;
deger = document.getElementById("baslikId2");
deger.style.color = "red"; // text i kırmızıya boyar
deger.textContent = "red"; // text yerine kırmızı yazdırır.


/* --------- Class Seçiciler ---------- */

// var deger = document.getElementsByClassName("paragraf"); //htmlcollection döndürür.
// deger[0].style.color= "brown"; //indexlemezsek hata verir.
// deger[0].textContent = "Merhaba";

deger = document.getElementsByClassName("link");
deger[0].style.color = "lightpink";
deger[1].textContent = "Merhaba";

/* --------- Etiket Seçiciler (Tag) ---------- */

deger = document.getElementsByTagName("h1");
deger[0].style.background = "blue";
deger[0].style.padding = "30px";
deger[0].style.color = "white";

/* ---- Es6 Standardına Göre Query Selector Kullanımı ----  */

deger = document.querySelector(".link"); // tag, #id, .class kullanılabilir. Bir eleman döndürür.

deger = document.querySelectorAll(".link"); //querySelector ile aynı değerleri alır. Tüm elemanları döndürür. Değişiklik yapmak için indexleme yapılmalı

deger[0].style.color = "green";
deger[0].textContent = "green";
deger[0].style.background = "pink";


/* ------- Listeleme örneği --------- */

deger = document.querySelectorAll(".listItem");
// array gibi işlem yapabilmek için collection ı array aa dönüştürelim.

deger = Array.from(deger);
// deger.forEach(function(value,index){
//     value.textContent = "Merhaba";
// }) // Tüm list elemanlarını merhanaa ile değiştirir.

//  deger.forEach(function(value, index){
//   value.textContent = `${index} : Merhaba`;
// }) // index numaralarıyla birlikle list elemanlarını Merhaba yazdırır : 0:Merhaba gibi.

/* ---------- Çocuk Nesnelerine ulaşma ---------------- */

deger = document.getElementsByClassName("ulList");
// deger = deger[0].children[1].style.color = "red" ;
//deger = deger[0].childNodes[0].nodeName; // text
//deger = deger[0].childElementCount; //4. eleman sayısını verir.


/* ---------- Çocuk içinde çocuk nesnesi seçimi ----------- */

//deger = deger[0].children[2].children; // span ı döndürür.


/* ---------- üst elementlere ulaşma --------------- */

//deger = deger[0].parentElement.parentElement; //ilkki nav ikincisi body döndürür. Ekledikçe bbir üs nesneye çıkar.

//deger = deger[0].parentNode; //nav nodelist


/* ---------- Bir sonraki veya bir önceki elementi seçme --------- */

//deger = deger[0].nextSibling; //#text nodetipini döndürür.

// deger = deger[0].nextElementSibling; // yenideger. bir sonraki tag i getirir.

deger = deger[0].previousSibling.previousSibling; //aClass 
console.log(deger);
