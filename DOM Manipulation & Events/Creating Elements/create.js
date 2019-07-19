const li = document.createElement('li'); // Create Element

li.className = 'collection-item'; // Add class 

li.id = 'new-item' // Add ID

li.setAttribute('title', 'New Item'); // Add attribute

li.appendChild(document.createTextNode('Hello World')); // You can append text nodes or anything Create text node and append.



// Create new link element

const link = document.createElement('a');

// Add Class

link.className = 'delete-item secondary-content';

// Add icon HTML

link.innerHTML = '<i class="fa fa-remove"></i>';

// Append Link into li

li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);