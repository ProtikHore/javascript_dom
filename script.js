console.dir(document); // full page document print
console.dir(typeof(document)); // document types
console.log(document.title); //page title
console.log(document.head); //full head
console.log(typeof(document.head)); // head type object
console.dir(document.head);

console.log(document.all); // document.all is not an array. It is and object or a collection
console.log(document.images);

document.title = 'Hello DOM'; // dynamically change object property


// Traversing DOM Elements
// Get element by ID
console.log(document.getElementById('new-task')); // get full element by id...getElementById is in prototype

let headerElement = document.getElementById('header');
console.log(headerElement.textContent); // get text from code
console.log(headerElement.innerText); // get text from browser
console.log(headerElement.innerHTML); // get html as text

headerElement.textContent = 'TO-DO APP';
headerElement.innerText = 'TOO-DO APP';
headerElement.style.color = 'red'; // dynamially set color to text
headerElement.style.fontSize = '50px'; // from javascript to write css '-' should be capital letter


//Get elements by class
console.log(document.getElementsByClassName('item')); // get full elements by class (multiple class)
//let item = document.getElementsByClassName('item'); //for all class
let itemUl = document.getElementById('items'); // for specific element
let item = itemUl.getElementsByClassName('item');
for(let i = 0; i < item.length; i++) {
    item[i].style.color = 'red';
}

//Get elements by tag name
let itemLi = document.getElementsByTagName('li');
console.log(itemLi);


// Query Selector

// document.querySelector for single element
//document.querySelectorAll for all elements of collection

let header = document.querySelector('.header'); // #for id and . for class
console.log(header);

let lastItem = document.querySelector('.item:last-child'); // always retuen only one data
console.log(lastItem);
lastItem.style.color = 'blue';

let lastItems = document.querySelectorAll('.item:last-child'); // return multuple last item
console.log(lastItems);
for(let element of lastItems) {
    element.style.color = 'green';
}

let nthItem = document.querySelector('.item:nth-child(2)'); //for any child
console.log(nthItem);
nthItem.style.color = 'black';

let nthItems = document.querySelectorAll('.item:nth-child(2)'); //for any child
console.log(nthItems);
for(let element of nthItems) {
    element.style.color = 'black';
}


//parent child relation

// parent to child

const grandParent = document.querySelector('.todo-list');
const parent = grandParent.children;
//const parent = document.querySelector('#items');
console.log(parent);
//const children = parent.children;
const children = parent[1].children; // if multiple children
console.log(children);
console.log(children[0]);

const decendantyChildren = grandParent.querySelectorAll('.item'); // grandparent to children
console.log(decendantyChildren);


// child to parent
const childrenElement = document.querySelector('.item'); // querySelector up to bottom
const parentElement = childrenElement.parentElement;
console.log(parentElement);

const closestGrandParent = childrenElement.closest('.todo-list'); // closest bottom to up
console.log(closestGrandParent);


// siblings
const childrenOne = document.querySelector('.item');
const childrenTwo = childrenOne.nextElementSibling; // next sibling
console.log(childrenTwo);



// creating an element

const divElement = document.createElement('div');
console.log(divElement);
console.dir(divElement);
divElement.className = 'red';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
const h2Element = container.querySelector('h2');
container.insertBefore(divElement, h2Element);
container.appendChild(divElement); // must be a html element; can append only one element at a time
container.append(divElement); // can be a html element or a text; can append multiple elements and a text at same time

const a = container.appendChild(divElement); // return element
const b = container.append(divElement); // not return anything
console.log(a);
console.log(b);

container.append(divElement, document.createElement('p'), 'Hello World'); //can append multiple elements and a text at same time




// Event Listeners

const headerElementListener = document.querySelector('#header');
headerElementListener.addEventListener('click', (evevnt)=>{
   console.log(evevnt); 
});

const inputElement = document.querySelector('input[type="text"]');
console.log(inputElement.value);
inputElement.addEventListener('keyup', (evevnt)=>{
    console.log(evevnt.target);
    console.log(evevnt.target.value);
 });

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (evevnt)=>{
    evevnt.preventDefault();
    console.log(evevnt.target);
    console.log(evevnt.target.value);
    console.log(inputElement.value);
 });