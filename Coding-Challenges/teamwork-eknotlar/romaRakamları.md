ROMA RAKAMLARINI NASIL DEĞERLENDİREBİLİRİZ?

Roma rakamları belli başlı kurallara göre oluşturulan sayısal bir sistemdir. Yazılırken aynı harf üç kezden daha fazla tekrar edilmemektedir. Bunun sonucunda da 4, 9, 40, 90, 400 ve 900 sayılarının modern zamanlarda daha sık kullanılan, küçük değerli sembollerin büyük değerli sembollerin soluna yazıldığında değerlerinin çıkarılmasına dayanan, farklı yazılış şekilleri de vardır.

Roma rakamları yazılırken aynı harf üç kezden daha fazla tekrar edilmemektedir. Bunun sonucunda da 4, 9, 40, 90, 400 ve 900 sayılarının modern zamanlarda daha sık kullanılan, küçük değerli sembollerin büyük değerli sembollerin soluna yazıldığında değerlerinin çıkarılmasına dayanan, farklı yazılış şekilleri vardır. Bunlara örnek verelim.

Roma rakamları ile Batı Arap rakamları ile
IV 4
IX 9
XL 40
XC 90
CD 400
CM 900

Yukarıdaki kuralla devam edilirse; Roma rakamları ile yazılabilecek karakter sayısı açısından en uzun sayının 3888 (MMMDCCCLXXXVIII) olduğu anlaşılmaktadır. Fakat Roma rakamlarında M'den büyük bir rakam olmadığından l000'den sonraki sayılarda bu kural geçerli olmadığı da anlaşılır.

Örnek vermek gerekirse 4000, MMMM şeklinde yazılır. Soldaki rakamı sağdakinden çıkarıp yeni bir sayı elde etme yöntemi, sayıların okunuşunda ve dört işlemin uygulamalarında çeşitli karışıklıklara yol açmaktadır. Yine örmek vermek gerekirse 1999'u gösteren MCMXCIX sayısının okunabilmesi için M CM XC IX biçiminde ayrılması gerekir. Burada M 1000'i, CM 900'ü (1000-100), XC 90'ı (100-10), IX ise 9'u (10-1) gösterir.

Romen rakamlarında sıfır sayısı ve basamak kavramı yoktur. Rakam, ifade ettiği sembol kadardır; yani X rakamı, hangi basamakta olursa olsun 10 'dur. Halbuki günümüzde kullandığımız Arap rakamlarında 1 tek başınayken 1 'dir, ancak bir soldaki haneye geçtiğinde 10 değerini, iki soldaki haneye geçtiğinde de 100 değerini alır.

Roma rakamlarında, bir sayının bin katını göstermek için sembolün üzerine bir yatay çizgi, milyon katını göstermek için de ilgili sembolün üzerine iki yatay çizgi ile ifade edilir.

ÇÖZÜM 1

Öncelikle bir fonksiyon tanımlaması yapıyoruz. Fonksiyon içerisinde m=bin, c=100, x=10 ve i=1 in karlarını tanımlıyoruz. Sonrasında fonksiyon içerinde işlem yaptıracağımız thousands, hundreds, tens ve ones değişkenlerini tanımlıyoruz. Burada matığımız;
thousands= m[fonksiyonla çağırdığımız numaranın 1000'e bölünme işleminde bölüm kısmına denk gelen index değeri].
hundreds=c[fonksiyonla çağırdığımız numaranın 1000'e bölümünden kalan değeri 100'e bölünme işleminde bölüm kısmına denk gelen index değeri].
tens=x[fonksiyonla çağırdığımız numaranın 100'e bölümünden kalan değeri 10'e bölünme işleminde bölüm kısmına denk gelen index değeri].
ones=i[fonksiyonla çağırdığımız numaranın 10'a bölümünden kalan değerin index değeri]

Sonrasında ans değişkeninde bu değerleri bir araya getirip döndürüyoruz.

ÇÖZÜM 2

Öncelikle bir fonksiyon tanımlaması yapıyoruz. Fonksiyon içerisinde num arrayi içerinse sayıları, sym arrayi içerisinde ise roma rakamlarını tanımlıyoruz. Tanımladığımız sayılar 1,4,5,9,10,40,50,90,100,400,500,900 ve 1000 sayıları ve karşılığındaki roma arakamlarıdır. Burada 4,9,40,90,400 ve 900 tanımlamamızın sebebi yukarıda belirtilen özel nedendir. i=12 değişkeninini index olarak, ans değişkenini ise sonuçları basacağımız boş array olarak tanımlıyoruz. i değişkenini 12 olarak tanımlamamızın sebebbi işleme 1000 ile başlamak istememeizdir. roma rakamları soldan sağa doğru okunmaktadır.

Roma rakamlarında 0 yoktur bu sebeple while ile numaranın 0 dan büyük olduğu sürece çalışacak bir loop tanımlıyoruz. while loop içerinine div isminde bir değişken tanımlıyoruz. let div =Math.floor(number(num[i]); şeklindedir. Kod ilk çalışmaya başladığında i[12] değeri olarak 1000 sayısını alacaktır. Bu işlemde girilen syıyı 1000 e bölecek ve çıkan sayıyı aşağıya yuvarlayacaktır. number ise işleme esas olan numberin 1000 e bölümünden kalan olacaktır.

Daha sonrasında ikinci bir while loop tanımlıyoruz. Yukarıda da bahsettiğimiz gibi roma rakamlarında en büyük sayı 1000 dir. 3000 yazmak için 3 adet 1000 yazmak gerkmektedir. Bu döngüyle gerekli miktarda sym ans arrayine push edilmektedir. Bu döngüde ayrıca i sayısı da 0 olana kadar looplarla azalmaktadır.

Son olarak ans değeri console.log ile konsola yazdırılmaktadır.
