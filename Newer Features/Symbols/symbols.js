// Create a symbol

const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym2)

console.log(Symbol('123') === Symbol('123')); // It will come out false
console.log(`Hello ${String(sym1)}`); // You cant use the symbol as a string because you neec to convert it first with String() or toString()

// Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');


const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY2])
// console.log(myObj[KEY1])


// Symbols are not enumerable in for...in

for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}


// Symbol are ignored by JSON.stringify

console.log(JSON.stringify({
    [Symbol('sym1')]: 'prop' }));