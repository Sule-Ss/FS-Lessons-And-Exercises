//* ======================================================
//*                    CALLBACK
//* ======================================================

//? Bir fonk başka bir fonku parametre olarak alabilir. Buna callback denir.

//! high order func(HOF) >>>>>> HOF(callback){}

//? Bir fonk işi bittikten sonra başka bir fonk kullanması gerekiyorsa callback işimizi kolaylaştırır.

//todo: 1. kullanım yeri : Event handlers are a good example of a type of callback function (async await)
//? önce veriyi çek sonra sayfayı render et gibi durumlarda callback kullanılır.

const increment = () => {
  const counter = document.querySelector("#counter");
  console.log(counter);
  counter.textContent = Number(counter.textContent) + 1;
};
document.querySelector("button").addEventListener("click", increment); // increment dışarda çağırılabilir durumda. Tercih edilen bir durum değil.

//! Tercih edilen :
/*  document.querySelector("button").addEventListener('click', ()=>{
    const counter = document.querySelector("#counter");
    console.log(counter);
    counter.textContent = Number(counter.textContent) + 1;
}); */

//? func experition ile de tanımlanabilir this kullanabilmek için:

/* document.querySelector("button").addEventListener('click', function(){} */

//todo: 2. kullanım yeri : Efective Programming Approach
//? Amaç daha efektif kod yazmak. Aşşağıdaki örnek best practice e daha uygun.

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calculate = (callback) => {
  const num1 = Number(prompt("First Number"));
  const num2 = Number(prompt("Second Number"));
  console.log("RESULT", callback(num1, num2));
};

calculate(sum);
calculate(sub);
