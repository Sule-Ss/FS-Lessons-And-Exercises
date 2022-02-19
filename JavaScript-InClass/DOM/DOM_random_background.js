/* ----- Butona tıklayınca Body arkaplanı değiştirme ------ */

const btn = document.querySelector(".button-red");
const body = document.body;

btn.addEventListener("click", (e) => {
  e.preventDefault(); //varsayılanları çalıştırmasını engeller.
  const renklerDizisi = ["red", "green", "blue", "black", "white"]

  const randomRenkler = Math.floor(Math.random()*renklerDizisi.length);
  console.log(randomRenkler);
document.body.style.background = renklerDizisi[randomRenkler];
});

