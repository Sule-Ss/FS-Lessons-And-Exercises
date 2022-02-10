/* 
dom >> window >> document >> html tags
*/

/* 
nodeList array gibi kullanılabilir. collection dönüştürülmek zorunda.(Array.from(HtmlCollection))
*/

/* 
getElementById >> render süresi en kısa olan

*/

/* 
property vs. Attribute Farkı :

property >> object
attribute >> html taraflı çalışır.  .getAttribute("attribute ismi") >> elementi ve atribute ismini döndürür.
                                    .setAttribute("attribute ismi", "yeni attribute ismi") >> elementin attribute adını değiştirdik.(type, id, class, name .vs..) Eski değer tamamen yok olur.
                                    html kısmında birşey değişmez. dom kısmında değişiklik yapıyoruz.
                                    
*/

/* 
innerHTML       : html içeriğini tagleriiyle birlikte verir. atama yaparken += ile üzerine ekleme yapılır. yoksa mevcut html in tamamını siler.
innerText       : taglerin içindeki text leri alır. Birbiri ardına yazdırır.
textContent     : tagleri algılar. ancak boşluk gibi algılar sadece text i yazdırır.
*/

fullNameById.setAttribute("value", firstNameById.value.upperCase() + " " + lastNameById.value.upperCase())

// .querySelector() >> ilk bulduğu elemanı döndürür. 

// .querySelectorAll() ve .getElementsByName() >> nodelist döndürür. 

/* ---- events ------- */

    // Dom js ile html sayfasını entegre eder.
    // Kullanıcı ile html sayfası entegre edilir.

// addEventListener("event", func()) tanımlamanın 4 farklı yolu var. event in adı yazılır. başına on konulmaz! 
// load event i sayfadaki manipülasyonlar dahil herşeyin yüklenmesini beklediği için en sona çalışır.
//window.onload = () =>{} şeklinde de yazılabilir. addEventListener() a çevirmekte fayda var.

/* Bubbling(Kabarcıklanma) ve Capturing(Yakalama)  */

/* 3 = torun 1 = dede
 bir > iki > uc sırasıyla çalışması >> capturing yani yakalama
 uc > iki > bir sırasıyla çalışması >> kabarcıklanma yani bubbling
*/