/* number data type : max 15 digit olmalı */
/* decimal number type: max 17 digit olmalı */

/* primitive lar stack de tutulur immutable dir ram de az yer kaplar, sınırlıdır
object ve array heap de tutulur mutable dir ram de daha fazladır ucu bucağı yoktur. */

/* Eğer program esnasında boyutları bildirilmiş değişmez bir değer kullanıyorsak stack, değişebilir bir değer kullanıyorsak heap bizim için uygun olacaktır */

/* Stack kullanılır ve işi bittikten sonra kendini otomatik olarak bellekten yok eder. Fakat heap‘te bu işi siz yapmalısınız. (Çünkü C’de Garbage Collector yok) */

/* Stack:
Stack candır. Kullanımı kolaydır.
Bilgisayarda RAM’de tutulur. Tıpkı Heap gibi.
Oluşturulan değişkinler stack kapsamından çıkınca otomatik olarak yok edilir.
Ulaşılması heap‘e göre oldukça hızlıdır.
Stack üzerinde kullanım fazla olduğunda alan yeterli olmayabilir. Mesela 20 boyutlu bir diziye 21 eleman atamak gibi…
Oluşturulan değişkenler pointer olmadan kullanılabilir.
Derleme zamanında oluşturulur.
Kullanacağınız yerin boyutunu tam olarak biliyorsanız Stack‘i kullanmak sizin için uygun olacaktır.
Heap:
Heap biraz nazlıdır. Ama nazını çekerseniz oda sizin yükünüzü çeker.
Bilgisayarda RAM’de tutulur.Tıpkı Stack gibi.
Bir blok içerisinde oluşturulan heap değişkenler, bloğun dışına çıktığında otomatik olarak yok edilemez, bunun manuel olarak yapılması gerekir.
Stack ile karşılaştırıldığında oldukça yavaştır.
Doğru kullanılmaması durumunda bellek sorunları yaratır.
Değişkenler pointer ile kullanılır.
Çalışma zamanında oluşturulur.
İhtiyacınız olan boyutu tam olarak bilmiyorsanız Heap kullanımı sizin için biçilmiş kaftandır. */

/* camel case theQuickBrownFoxJumpsOverTheLazyDog
var printCustomerMessage = 'Welcome Customer'
snake case "the_quick_brown_fox_jumps_over_the_lazy_dog"
kebab case or Train case "the-quick-brown-fox-jumps-over-the-lazy-dog" 
screaming snake case (or SCREAMING_SNAKE_CASE) or hazard case. */

// var x = 999999999999999;     
// var y = 9999999999999999;

// console.log(x);
// console.log(y);

// var z = 1.12345678912345678
// var zz = 1.12345678912345678455

// console.log(z);
// console.log(zz);

// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991


// var x = 0.1 + 0.2
// console.log(x);
// console.log(+x.toFixed(2));


// console.log(15+25);
// console.log(0000015+00025); //octal 01234567 015 : 5 + 8 = 13 025: 5 + 16 = 21 13+21 =34
// console.log(018+028); //decimal

// console.log(Number(018));

/* let a = 2;
let b = a;
console.log({a},{b});

 a = 3;
console.log({a},{b}); */