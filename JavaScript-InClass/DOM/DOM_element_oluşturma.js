/* ---- Element  Oluşturma(Creat Element) ------- */

const liler = document.createElement("li");
const uller = document.createElement("ul");

/* ----- Class Ataması ---- */

liler.className = "listItem";

/* ----- id ataması ------- */

liler.id = "listId";

/* ----- Attribute Ataması -------- */

liler.textContent = "Helloooo"
liler.setAttribute("style", "background-color: red;"); //set metodları güncelleme değiştirme yapmamızı sağlar.


/* ----- Text Ataması --------- */

liler.appendChild(document.createTextNode("Hello World"));


/* ------ ul transfer li ------ */

uller.appendChild(liler); // ul nin içine li yi ekler
console.log(uller.children); // li yi döndürür.

/* ---- a linkleri ------ */

const link = document.createElement("a");
link.className = "linkItem";
link.id = "linkId";
link.setAttribute("title", "tool");
link.innerHTML = "<span> 10 </10>";// html elemnti ekler
console.log(link);


/* ----- a transfer li -------- */

liler.appendChild(link);
console.log(liler.children[0]);
