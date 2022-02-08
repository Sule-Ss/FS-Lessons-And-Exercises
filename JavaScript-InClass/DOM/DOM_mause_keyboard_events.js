/* ----- Mause Events ------- */

const btn = document.querySelector(".tikla");
const body = document.querySelector("body");

//btn.addEventListener("click", calistir); 
/* 
click,
 mousedown, 
 mouseup, 
 mouseenter(üzerine gelince çalışırr hover gibi.), 
 mauseover(mouseenter la aynı mantıkla çalışır.),
 mouseout (mause la üzerine gelip tıklamadan veya tıkladıktan sonra geri çekince )
mouseleave (button üzerinde gezinme miktarı kadar dönüş verir)
 .clientY y ekseni uzaklığını verir
 .clientX x eksenine uzaklığı verir

 */
/* function calistir(e) {
  console.log(e.clientX + "Olay Tipi");
} */

/* body.addEventListener("mousemove", calistir);

function calistir(e){
    btn.innerHTML ="x: "+ e.clientX + "y : " +e.clientY; //mouse un bulunduğu alanla sol tarafa olan uzaklğını ve üste olan uzaklığını buton içine yazdırır.
}
 */
/* ---- Keyboard Events --------- */

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input-1");
const submitElement = document.querySelector("input_submit");

formElement.addEventListener("keyup", function(e){
console.log(e.type, "Olayı çalışır"); // target tüm eventleri gösterir. type özelde hagisini istersek onu gösterir.
});

/* 
submit     yalnızca formelement le çalışır.
keyup     tuştan elini çektiğin anda tetiklenir
keypress  tuşa basıldığı anda tetiklenir.
focus     element olmalı.  Elemente tıklanınca çalışır.
blur      focus un tersi.
cut       ctrl+x
copy      ctrl+c
paste     ctrl+v
change    select elementiyle kullanılır. Option değiştiğinde çalışır.
*/