// DOM Accessing
/* 
Html elementlerini objeye dönüştürür.
Nesne üzerinde değişiklikleri kolayca yapabiliriz.
DOM un en önemli bileşenleri window ve document objeleridir.

*/
let firstNameById = document.getElementById("first_name");
console.log(firstNameById);

let firstNameByClassName = document.getElementsByClassName("input--style-4");
console.log(firstNameByClassName); //HtmlCollection(4)

let firstNameByName = document.getElementsByName("first_name");
console.log(firstNameByName); //NodeList

let firstNameBySelector = document.querySelector("first_name"); //id-isim ile yakalayabilir. # kullanmak şart id. nokta da class ta kullanılmalı.
console.log(firstNameBySelector);

let firstNameBySelectorClass = document.querySelector(".input--style-4"); // selector un class kullanımı
window.console.log(firstNameBySelectorClass); // ilk elemanı döndürür.

let firstNameBySelectorName = document.querySelector("[name='first_name']");
console.log(firstNameBySelectorName);

let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4");
window.console.log(firstNameBySelectorAllClass);

//getElementsByClassName => HTML collection. collection larda array fonkları kullanılmaz. Array.from ile array formatına dönüştürülmeli.
//getElementByName => Nodelist  ---- Nodelist : Array vari bir yapı array fonksiyonları kullannılabilir.
//querySelectorAll => Nodelist  --- Nodelist.arrayFunc()

// property >>>> objelerde olur.

// attribute >>>> Html tarafında çalışır. property ile birbirlerinin yerine kullaılabilir.

console.log(firstNameById.getAttribute("id"));
console.log(firstNameById.getAttribute("class"));
/* firstNameById.setAttribute("class", "redColorClass");
firstNameById.setAttribute("type", "radio"); */

// innerHTML, innerText, textContent, (input => value)

let headerDiv = document.getElementById("headerId");
console.log("innerHTML", headerDiv.innerHTML); //içindeki elemanları html taglari ile birlikte verir
console.log("innerText", headerDiv.innerText); // tag icindeki yazilani verir
console.log("textContent", headerDiv.textContent); //  taglarin kendi metodlarını doldurmuyor, oraları boş alıp yazdırıyor

/* firstNameById.value = "Ryan";
lastNameById.value = "Daniel"; */

// firstNameById.setAttribute("value", "Ryan"); // value değiştirilebilir.

// CodeChallenge :

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

let fullName = document.querySelector("#full_name");
fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;

let email = document.getElementById("email");
email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;

//         create logo element

let logo = document.createElement("img");
console.log(logo);
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");
// headerDiv.appendChild(logo);
headerDiv.innerHTML += `<img src = "img/logo.png" alt = "Bank  logo" class = "nav__logo" id="logo"/>`;
