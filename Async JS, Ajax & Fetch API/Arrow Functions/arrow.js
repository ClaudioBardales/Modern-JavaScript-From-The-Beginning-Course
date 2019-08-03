// const sayHello = function() {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line function does not need braces.

// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

// Return Object

// const sayHello = () => ({ msg: 'Hello' })


// // Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy')

const users = ['Nathan', 'John', 'William'];

// const nameLenghts = users.map((name) => {
//     return name.length;
// });

const nameLenghts = users.map(name => name.length);

console.log(nameLenghts);