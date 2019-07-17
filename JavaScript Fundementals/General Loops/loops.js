// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log('2 is my favorite number');
//         continue; // It stops the loop and then continues it.
//     }

//     if (i === 5) {
//         console.log('Stop the loop')
//         break; // Breaks the loops
//     }

//     console.log(`Number is ${i}`);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//     console.log(`Number ${i}`);
//     i++;
// }

// DO WHILE LOOP

// let i = 100;

// do {
//     console.log(`Number ${i}`);
//     i++;
// }

// while (i < 10);

/* The difference between WHILE and DO WHILE that DO WHILE is always going to run even if the condition isn't met */


// LOOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }


// FOR EACH

// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Sara' },
//     { id: 3, name: 'karen' },
//     { id: 4, name: 'steve' }
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);

//FOR IN

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`);
// }