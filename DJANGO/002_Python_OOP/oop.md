## Object Oriented Programming (Nesne Yönelimli Programlama)

- Nesnelerin kendine has özellikleri ve metodları vardır. 
- En büyük avantajı gruplama.
- Dict lere methodlar ekleyerek ortak bir kalıp(sınıf) çıkarılabilir.
- Örneğin fonksiyonlar defalarca aynı kodu yazmayı engeller.
- Oop da, fonksiyonların ve ortak özelliklerin gruplandırılmasıdır.
- Terminali temiz tutmak için : 
> - import os
> - os.system('cls' if os.name == 'nt' else 'clear')

- f1+interpretier ile kullanılan py sürümü seçilmeli.

- Python da bütün mimari classlar üzerine kuruludur.

- class ların ilk harfi büyük yazılır.

####  class attributes vs instance attributes :

<pre></pre>

<pre>
class Person:
    name = 'Barry'
    age = 45

person1 = Person()
person2 = Person()

print(person1.name)
print(person2.name)

Person.job = 'teacher'
person1.location = 'Turkey'
print(person2.location)
</pre>

- Hata verir. instancelarda yapılan değişiklik class larda ve class lardan türetilen diğer instance larda da değişikliğe neden olmaz. 
> location instance attribute. name ve age class attribute dür.

#### Self Keyword : 

- self, instance a işaret eder. Javascriptteki this gibi. self zorunlu değil faklı kullanımlarda geçerlidir ancak genel kullanım self. Ovject le instance arasındaki bağlantı self iile kurulur.

<pre>
class Person:
    name = 'Barry'
    age = 45

    def test(self):
        print('test')

    def set_details(self, name, age):
        self.name = name
        self.age = age

    def get_details(self):
        print(self.name, self.age)
</pre>

#### Static Method : 
- class a has bir metod. instance dan bağımsız çalışır. Bu yüzden self kullanılmaz.
- @staticmethod ile belirtilir.

<pre>
class Person:
    company = 'Clarusway'

    def set_details(self, name, age):
        self.name = name
        self.age = age

    def get_details(self):
        print(self.name, self.age)

    @staticmethod
    def salute():
        print('Hi there!')

# print(Person.name)
</pre>

#### Special methods :

- javascript teki constructor yapısı gibi çalışır.  `def __init__(self, parameters,,,):` şeklinde kullanılır. Tanımlama yapılır yapılmaz çalışır. class ı çağırırken parametreleri girmek zorundayız.

<pre>
special methods
class Person:
    company = 'Clarusway'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age)

person1 = Person('Barry',45)
person1.get_details()

liste = [4,2,9,11,5]
print(liste)
print(person1)
print(person1.__str__())  ->  def __str__(self) arka planda bunu yapar.
</pre>

- person1 i direct yazdırırsak türetildiği class ı ve hafızadaki yerini döndürür. Anlamlı bir çıktı istiyorsak ` def __str__(self): ` kullanmalıyız.

### OOP , şu nesnelere odaklanır:
required to be manipulated instead of logic. 
- Geliştirme ve bakımı kolaylaştırır
- Veri gizleme sağlar
- Gerçek dünyayı simüle etme yeteneği sağlar
- daha az hafıza ve organize
- yeniden kullanılabilir

#### OOP language follow 4 principles:

##### 1-ENCAPSULATION: 

- Veriyi gizleme. Herhangi bir nesnenin metotlarını, verilerini ve değiskenlerini diğer nesnelerden saklayarak ve bunlara erişimini sınırlandırarak yanlış kullanımlardan koruyan bir konsepttir.
- Python da private kavram yok. Yine de bir notasyon geliştirilmiş. `self._id` gibi alt çizgi ile belirtilir. Yine de değiştirilebilir ancak değiştirilirse class düzgün çalışmaz. Fiziki bir koruma sağlamaz.
- Eğer `self.__id2` gibi iki alt çizgiyle tanımlanırsa erişim engellenir. Ancak `person1._Person__id2` ile yine erişilebilir.

<pre>
class Person:
    company = 'Clarusway'

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._id = 5000
        self.__id2 = 4000

    def __str__(self):
        return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age)

person1= Person('Aaron',37)
print(person1._id)
# print(person1.__id2)
print(person1._Person__id2)

liste = [4,2,9,11,5]
liste.sort()
print(liste)
</pre>

##### 2-ABSTRACTION: 

- ##### Abstraction = Data Hiding + Encapsulation 
- Kullanıcıyı gereksiz detaylardan soyutlama. Örneğin .sort() metodunun ne işe yaradığını biliriz ancak arka plandaki algoritmasını bilmeyiz.

<pre></pre>


##### 3-INHERITANCE: 
- Kalıtım, bir sınıfın üst sınıftan miras almasına denir. Pratikte karışıklıklara sebep olduğundan kimi programlama dilleri, ancak tekli kalıtıma izin verirler. Bu dillerde çoklu kalıtım yerine interface denilen nesnelerden faydalanılarak çoklu kalıtımın verdiği özellikler, yan etkileri olmaksızın kullanılabilmektedir.

- Miras alıınan class ın tüm attributeleri kullanılabilir.
- `super()` keyword ü ile parent a ulaşılır.
- super() ile tanımlanan propertyleerde orjinal class ta olmayan attribute ü kullanmaktan kaçınak lazım. Yapıyı bozar.
- Üst class tan ihtiyaç olan kullanılır istenilen attribute yeniden tanımlanır ancak yeni attribute eklenmez.


##### 4-POLYMORPHISM: 
- Polymorphism, (çok biçimlilik) methodların objeye göre farklı çıktılar üretmesi veya farklı işler yapmasıdır. Yani alışageldiğimiz gibi methodlara sabit görevler vermek yerine onlara çok biçimli (polimorf) davranacak şekilde bir esneklik vermektir.

- Miras aldığımız şeyleri aynen kullanmak yerine değiştirme imkanı sunmasıdır.


##### overriding : 
- Bir sınıfa ait bir metodun, o sınıftan türetilmiş bir sınıf içerisinde aynı isimli bir metod tanımlanarak, bu metodun temel sınıftaki metodun yerine geçirmeye denir. Bu işlem,bir metodun aynı sınıftan türetilmiş farklı sınıflarda farklı işlere yaramasını sağlar.

- Paarenttaki iş görmeyen metodu ihtiyaçlarımızı karşılayacak şekilde ezeriz.
- Mevcut hale ilave yetenekler kazandırmak istersek `super()` ile çağırılabilir.


<pre>
class Person:
    company = 'Clarusway'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age)

class Lang:
    def __init__(self,langs):
        self.langs = langs

    def display_langs(self):
        print(self.langs)

class Employee(Person, Lang):
    def __init__(self, name, age, path, langs):
        # self.name = name
        # self.age = age
        super().__init__(name,age)
        self.path = path
        Lang.__init__(self, langs)
        # self.langs = langs

    # override
    def get_details(self):
        # print(self.name, self.age, self.path)
        super().get_details()
        print(self.path)

emp1 = Employee('Barry', 45, 'FS', ['Python', 'JS'])
emp1.get_details()
emp1.display_langs()

</pre>

#### multilevel inheritance in python :

- Multilevel Inheritance (Çok Seviyeli Kalıtım): Bir sınıfın alt sınıfı oluşturulduktan sonra bu alt sınfın da bir alt sınıfının oluşturulmasına denir. 
- Hierarchical Inheritance (Hiyerarşik Kalıtım): Bir üst sınıfın birden fazla alt sınıfa base class (temel sınıf)'lik yapmasına denir.

- super() ilk class a işaret eder. Eğer ikinci bir classtan da miras almak istiyorsak ya ismen çağırmalyız yada , içerisinde yapılan işlemleri tekrar tanımlamak lazım.  Yukarıdaki Langs classını Employee içinde çağırırken kullandık.

- `.mro()` türetülen class ağacını gösterir. `print(Employee.mro())` gibi.


#### inner class : 
- Sadece python a has class yapısı. Class içide class tanımlanabilir. Sabit metodlarla işlem yaparak default değerleri değiştiriyoruz. Model ve form tanımlarında çok kullanılacak.

from django.db import models

<pre>
class Article(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']
</pre>