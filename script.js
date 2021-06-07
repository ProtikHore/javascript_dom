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