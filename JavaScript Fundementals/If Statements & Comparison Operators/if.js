// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;


// EQUAL TO

// if (id == 100) {
//     console.log("correct")
// } else {
//     console.log('incorrect')
// }

// // NOT EQUAL TO

// if (id != 101) {
//     console.log("correct")
// } else {
//     console.log('incorrect')
// }

// // EQUAL TO value & type

// // USE THIS COMPARISON OPERATOR MOST OF THE TIME. 

// if (id === 100) {
//     console.log("correct")
// } else {
//     console.log('incorrect')
// }

// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//     console.log("correct")
// } else {
//     console.log('incorrect')
// }


// TEST IF UNDEFINED

// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`)
// } else {
//     console.log('NO ID')
// }


// GREATER OR LESS THAN

// if (id >= 200) {
//     console.log("correct")
// } else {
//     console.log('incorrect')
// }


// IF ELSE

const color = 'green';

// if (color === 'red') {
//     console.log("Color is Red");
// } else if (color === 'blue') {
//     console.log('Color is blue');
// } else {
//     console.log('What is this color?')
// }


// LOGICAL OPERATORS

const name = 'steve';
const age = 70;


// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an Adult`)
}

// OR ||

if (age < 16 || age > 65) {
    console.log(`${name} can't run in race`)
} else {
    console.log(`${name} is registered in the race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');


// WITHOUT BRACKETS

if (id === 100)
    console.log('CORRECT')
else
    console.log('INCORRECT')