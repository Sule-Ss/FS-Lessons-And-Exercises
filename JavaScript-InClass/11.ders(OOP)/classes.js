/* 
Abstraction     : önemli olmayan ayrıntıları görmezden gelmek veya gizlemek
Enscapsulation  : Dışarıdan müdehale edilmesini istemediğimiz önemli detayların saklanması
Inheritance     : Miras alma.
Polymorphism    : Çok şekillilik. Tanımlanan nesnenin çağırılan metodların farklı dönütler vermesi.
alt sınıflar farklı davranış gösterir.

https://teknoloji.org/nesne-yonelimli-programlama-nedir-javascript/
*/
// Class Structure. Büyük harfle başlayarak isimlendirilir.
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
}
myDog = new Dog("Buldog"); // ikinci argüman girilseydi foot a atama yapardı
console.log(myDog); //Dog {dogName: 'Buldog', foot: undefined}
console.log(Dog.dogName);


class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    walk(){
        console.log("im walking");
    }
    speak(){
        return 'i like humans';
    }
}

// console.dir(Pet);
// const myPet = new Pet('Rubby', 3) // instance
// console.log(myPet);
// console.log(myPet.walk());


class Cat  extends Pet{ // extends ile miras aldık
    #weight = 5;
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    speak(){ // speak i değiştirebilirz
        let prevMsg = super.speak();
        prevMsg += ' and i like to meow'
        return prevMsg;
    }
}
// overwrite yapma:
const muezza = new Cat('Muezza', 2, 'grey');
console.log(muezza); // Cat {name: 'Muezza', age: 2, color: 'grey'}
muezza.walk(); // im walking
console.log(muezza.speak()); //i like humans and i like to meow

muezza.someProp = 4;
console.log(muezza.someProp);
