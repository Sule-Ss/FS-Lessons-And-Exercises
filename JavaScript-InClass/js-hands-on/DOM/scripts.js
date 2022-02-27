// JS DOM

// document.getElementBy...
// const myDom = document.getElementById('dom');

// console.log(myDom);

// const instructor = document.getElementById('info');
// console.log(instructor);

// const ins = document.getElementById('instructor');
// console.log(ins);

// Classname

// const withClassName = document.getElementsByClassName('class-info');
// console.log(withClassName[0]);

// TagName
// const cw = document.getElementsByTagName('h3');
// console.log(cw);

// document.querySelector

// console.log(document.querySelectorAll('.class-info'));

// console.log(document.querySelector('#instructor'));

// console.log(document.querySelectorAll('h3')[1]);

// console.log(document.querySelector('div h3'));
// console.log(document.querySelectorAll('html div h3'));

// console.log(document.querySelector('.class-info h3'));

// console.log(document.querySelector('#info h3'));

///////////////////////////////////////////////////////////////////

// Manipulation

// const brands = document.querySelector('#brands');

// // console.log(brands);

// // brands.innerHTML += `<li>NioyaTech</li>`;
// brands.innerHTML =
//   brands.innerHTML + `<li class="brand" style="color:red">NioyaTech</li>`;

// const classBrands = document.querySelectorAll('.brand');
// console.log(classBrands[3].innerText);

// const copyRight = document.querySelector('footer p');

// console.log(copyRight);
// // copyRight.innerText = '<h1>&copy; 2020 clarusway.com</h1>';
// copyRight.innerHTML = '<h1>&copy; 2020 clarusway.com</h1>';
// copyRight.innerHTML = '&copy; 2020 clarusway.com';

// const lessonList = [
//   { id: 1, name: 'HTML' },
//   { id: 1, name: 'CSS' },
//   { id: 1, name: 'JS' },
//   { id: 1, name: 'REACT' },
// ];

// const lessons = document.getElementById('lessons');
// for (item of lessonList) {
//   lessons.innerHTML += item.name + '<br>';
// }

// let liste = document.querySelector('#lessons');
// for (let i = 0; i < lessonList.length; i++) {
//   liste.innerHTML += lessonList[i].name;
// }

// const lessonElm = document.getElementById('lessons');
// lessonList.forEach((element) => {
//   lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;
// });

//////////////////////////////////////////////////////////////////////
// setAttribute getAttribute

// const mdn = document.querySelector('#mdn');
// // console.log(mdn);

// const mdnHrefAttr = mdn.getAttribute('href');
// console.log(mdnHrefAttr);

// mdn.setAttribute('href', 'https://www.w3schools.com/');
// mdn.innerHTML = 'W3Schools';

// // 🔥🔥🔥🔥🔥 CHALLENGE  🔥🔥🔥🔥🔥

// const insElm = document.querySelectorAll('#instructors li');
// // console.log(insElm);

// insElm.forEach((item) => {
//   console.log(item.innerText.includes('FrontEnd'));
//   if (item.innerText.includes('FrontEnd')) {
//     item.setAttribute('class', 'front-end');
//   } else if (item.innerText.includes('BackEnd')) {
//     item.setAttribute('class', 'back-end');
//   }
// });

// // Add style manually with js

// const jsPrg = document.querySelector('#js-prg');

// console.log(jsPrg);

// jsPrg.style.color = 'green';
// jsPrg.style.backgroundColor = 'red';
// jsPrg.style.fontSize = '1rem';
// jsPrg.style.margin = '10px';

// const cwBanner = document.getElementById('cw-banner');
// // console.log(cwBanner);

// console.log(cwBanner.classList);
// cwBanner.classList.add('imp');
// cwBanner.classList.remove('banner');

const cwQuote = document.querySelector('#quote-div');
console.log(cwQuote);

cwElm = document.createElement('div');
console.log(cwElm);
cwElm.innerText = 'Clarusway';
cwQuote.appendChild(cwElm);
