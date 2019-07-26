// String

const name1 = 'Jeff';
const name2 = new String('Jeff');



name2.foo = 'bar';


console.log(name2);


console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}


// Number

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2)

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2)

// Function

const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum2(1, 1));

// Objects

const john1 = {
    name: 'john'
}

const john2 = new Object({ name: 'john' });

console.log(john2);

// Arrays

const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr2)

console.clear();

// Regex

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);