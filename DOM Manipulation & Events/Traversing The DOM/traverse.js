// Traverse Means moving up and Down in the DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


// Get child nodes

val = list.childNodes; // This gives us a nodeList. The Text Nodes are the line breaks of the DOM.
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Get Children element nodes

val = list.children; // This returns an HTML collection. You can't use for loops OR array methods because it's not an array.
val = list.children[1];
list.children[1].textContent = 'Hello'; // You can change the text on the child elements as well.

// Children of Children

val = list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0];


val = list.firstChild; // This returns a Text Node from the child element.
val = list.firstElementChild; // This returns an element child of the parent element.


val = list.lastChild; // This returns the last Text node. 
val = list.lastElementChild; // This returns the last element child of the parent element.

val = list.childElementCount; // How Many Child Elements are in the parent Element.


// Get Parent NODE.

val = listItem.parentNode; // This gets the parent element.
val = listItem.parentElement; // Same thing.
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling; // This is also gives us a text node.
val = listItem.nextElementSibling;

// get Prev Sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling; // if there is no previous sibling before then this becomes NULL.


// Traversing

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // Moving up and down in the DOM is Traversing.

val = list.childNodes;
val = list.childNodes[3].style.background = 'red';
val = list.childNodes[5].style.background = 'green'; // You can't style a text node?






// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype




console.log(val);