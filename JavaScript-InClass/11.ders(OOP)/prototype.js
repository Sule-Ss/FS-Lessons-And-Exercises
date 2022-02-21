/* 
claasslarda yeni method eklenmez
prototype te eklenebilir?
*/

function Cat(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

/* const pisi = new Cat('Pisi', 1, 'yellow');
console.log(pisi); */

const arr = [1,2,3];
console.log(arr.__proto__); // prototipini döndürür.
console.dir(((x) => x+ 2).__proto__);

// Pet

function Pet(name, age){
    this.name = name;
    this.age = age;
}

Pet.prototype.walk = function(){ // pet ten oluşturulacak bütün nesnelerin sahip olmasını istediğimiz özelliği bağlıyoruz
    console.log('im walking');
};

Pet.prototype.speak = function(){
    return 'i like humans'
}

const myPet2 = new Pet("Karabas", 4)
console.log(myPet2);

// Pet ile Cat i birbirine bağlama : 

Cat.prototype = Object.create(Pet.prototype);

const pisi = new Cat('Pisi', 1, 'yellow');
console.log(pisi);
pisi.walk();