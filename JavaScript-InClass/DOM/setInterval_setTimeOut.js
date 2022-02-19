// SetTimeOut(); oluşturulan fonk/metodu belirlenen saniyeler içinde bir kere yürütür.
// setInterval(); oluşturulan fonk/metodun belirlenen milisaniye süresince sürekli çalışmasını sağlar

//clearTimeOut(); setTimeout u iptal eder.
//clearInterval();

/* const setayar = setTimeout(() => {
console.log("yükleniyor...");
}, 2000);
 */


/* const setayar = setTimeout(yuklendi, 2000);

function yuklendi(){
    console.log("yükleniyor...");
} */

// clearTimeout(setayar);

/* const setayar = setInterval(yuklendi, 2000);

function yuklendi(){
    console.log("yükleniyor...");
} */

// clearInterval(setayar);

const saat = setInterval(() => { //ekrana şuanın saatini ss:dd:ss şeklinde yazdırır.
    const a = new Date();
    const b = a.toLocaleTimeString();
    document.body.innerHTML = b;
}, 1000);