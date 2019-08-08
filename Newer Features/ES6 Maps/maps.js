// MAPS = Key-value pairs - can use ANY type as a key or value

const map1 = new Map();


// Set Keys

const key1 = 'some string'
key2 = {},
    key3 = function() {};


// set map values

map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');


// // get values by key

// console.log(map1.get(key1), map1.get(key2), map1.get(key3))


// // Count values

// console.log(map1.size);


// ITERATING THROUGH MAPS

// Loop using for....of to keys and values

// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterated keys only

// for (let key of map1.keys()) {
//     console.log(key);
// }

// // Iterate values

// for (let value of map1.values()) {
//     console.log(value);
// }


// LOOP WITH forEach

// map1.forEach(function(value, key) {
//     console.log(`${key} = ${value}`);
// })


// CONVERT SETS INTO ARRAYS

// Create an array of keys value pairs

const keyValArr = Array.from(map1);

console.log(keyValArr);

// Create array from values

const valArr = Array.from(map1.values);

console.log(valArr);


// Create an array of keys

const keyArr = Array.from(map1.keys());

console.log(keyArr);