// SETS - Store unique values of any type


const set1 = new Set();


// Add values

set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // If you add the same time in the set it does not increase the number.


// const set2 = new Set([1, true, 'string'])

// console.log(set2)


// console.log(set1)


// // Get count

// console.log(set1.size);


// // Check values


console.log(set1.has(100))
console.log(set1.has(50 + 50)) // This is also true
console.log(set1.has({ name: 'John' })) // Its false because its a not a primitive value
console.log({ name: 'John' } === { name: 'John' })


// // Delete from set

// set1.delete(100);

console.log(set1);


// ITERATE THROUGH SETS

// For..of   SETS ARE NOT KEY VALUE PAIRS THEY ARE JUST SINGLE VALUES

for (let item of set1) {
    console.log(item);
}

set1.forEach(value => {
    console.log(value)
})


// CONVERT Sets into array

const setArr = Array.from(set1);

console.log(setArr);