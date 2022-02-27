// ! universal joker * selector
// querySelector() selects the first element in the document:
let element = document.querySelector('*');
// console.log(element);
// finds all elements in the document:
let elements = document.querySelectorAll('*');
// console.log(elements);

// ! type selector
// finds the first h1 element in the document:
let firstHeading = document.querySelector('h1');
// console.log(firstHeading);

// finds all h2 elements:
let heading2 = document.querySelectorAll('h2');
// console.log(heading2);

// ! class selector
// the first element with the menu-item class:
let note = document.querySelector('.menu-item');
// console.log(note);
// finds all elements with the menu class:
let notes = document.querySelectorAll('.menu-item');
// console.log(notes);
// ! ID selector
// the first element with the id #logo:
let logo = document.querySelector('#logo');
console.log(logo);
// Since the id should be unique in the document, the querySelectorAll() is not relevant.

// ! attribute selector
// used when defined in styling

// ! grouping selector

// finds all <div> and <p> elements:
let elements2 = document.querySelectorAll('div', 'p');

// ! Combinators
// ! descendant combinator
//  p a will match all <a> elements inside the p element:
// let links = document.querySelector('p a');

// ! Child combinator
// finds all elements that are direct children of the first element:
// finds all li elements that are directly inside a <ul> element:
let listItems = document.querySelectorAll('ul > li');

// all li elements that are directly inside a <ul> element with the class nav:

let listItems2 = document.querySelectorAll('ul.nav > li');

// ! General sibling combinator ~
//  selects siblings that share the same parent:
// p ~ a will match all <a> elements that follow the p element, immediately or not:
// let links = document.querySelectorAll('p ~ a');

// ! Adjacent sibling combinator
//  selects adjacent siblings:
//  h1 + a matches all elements that directly follow an h1:
// let links = document.querySelectorAll('h1 + a');

// the first <a> that directly follows an h1:
// let links = document.querySelector('h1 + a');

// ! Pseudo
// ! Pseudo-classes
// The : pseudo matches elements based on their states:

// For example a:visited matches all <a> elements that have been visited:
let visitedLinks = document.querySelectorAll('a:visited');

// ! Pseudo-elements
// The :: represent entities that are not included in the document.

// For example, p::first-line matches the first-line of all p elements:
let links = document.querySelector('p::first-letter');
