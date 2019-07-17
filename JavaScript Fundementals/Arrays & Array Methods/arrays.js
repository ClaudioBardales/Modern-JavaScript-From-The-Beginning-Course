// Create Some Arrays

const numbers = [3, 4, 5, 64, 24, 5, 6433, 21];
const numbers2 = new Array(22, 34, 654, 335, 6, 764, 24, 5, 6);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'ede', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// GET ARRAY LENGTH

val = numbers.length;

// CHECK IF IT ARRAY

val = Array.isArray(numbers);

// GET SINGLE VALUE

val = numbers[3];
val = numbers[0];

// INSERT INTO ARRAY

numbers[2] = 100;


// FIND INDEX OF VALUE

val = numbers.indexOf(36);


// MUTATING ARRAYS

// // Add to End

// numbers.push(250);

// // Add to front

numbers.unshift(120);

// Take off from end

numbers.pop();

// Take off from front

numbers.shift();

// Splice values

numbers.splice(1, 3);

// Reverse

numbers.reverse();

// CONCAT ARRAYS

val = numbers.concat(numbers2);

// SORTING ARRAYS

val = fruit.sort();
val = numbers.sort();


// Use the "Compare Function"

val = numbers.sort(function(x, y) {
    return x - y;
})

val = numbers.sort(function(x, y) {
    return y - x;
})

// FIND

function over50(num) {
    return num > 50;
}

val = numbers.find(over50);


console.log(numbers);
console.log(val);