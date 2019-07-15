// Log To Console

// console.log("Hello World")
// console.log(123)
// console.log(true)
// var greeting = "Hello"
// console.log(greeting)
// console.log([1, 2, 3, 4])
// console.clear();
// console.warn("Yoooo")
// console.time("Hello")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.timeEnd("Hello")


// Variables

// Var, Let, Const

// var name = "John Doe";

// console.log(name);

// // You can reassaign variables to have a different value. 
// name = "Steve Smith"

// console.log(name);

// // Init variable;

// var greeting;

// greeting = "Hey"
// console.log(greeting);


// // Variables can have letters, numbers, _, $
// // Can't start with number

// // var 1 name = "john";

// // // Multiword vars

// // var firstName = "John"; // Camel Case
// // var first_name = "Sara"; // Underscore
// // var FirstName = "Tom"; // Pascal case


// // // LET

// // let name = "John Doe";
// // console.log(name);
// // name = "Steve Smith";
// // console.log(name);

// // CONST

// const name = "John";
// console.log(name);

// // Can't reassign
// // name = "sara";
// // Have to assign a value
// // const greeting;

// const person = {
//     name: "john",
//     age: 30
// }

// person.name = "Sara"

// console.log(person);

// Primitive Data Types

// Stored directly in the location the variable accesses.

// Primitive Data Types

// String
// Number
// Boolean
// Null
// undefined
// Symbols(ES6)

// Reference Data Types / Objects

// Arrays
// Object Literals
// Functions
// Dates
// Anything Else

// JavaScript is a Dynamically Typed Language

// PRIMITIVE

// // string
// const name = "John Doe"
//     // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Underfined
// let test;
// // Symbol
// const sym = Symbol();


// // REFERENCE TYPES - OBJECTS

// // Array

// const hobbies = ['movies', 'music']

// // Object Literal

// const address = {
//     city: 'boston',
//     state: 'MA'
// }

// const today = new Date();

// console.log(today);
// console.log(typeof sym)

// // TYPE CONVERSION

// let val;

// // Number to String
// val = String(53333);
// val = String(4 + 4);

// // Boolean to String
// val = String(true)

// // Date to String
// val = String(new Date())
//     // Array to String
// val = String([1, 2, 4, 5, 5])

// // toString()
// val = (5).toString();

// // You can use either or

// // String to Number

// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number("Hello");

// val = parseInt("100,30");
// val = parseFloat("100.30")



// // output

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2))


// Type Cohercion

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum)

// NUMBERS

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math With Numbers

// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = num1 / num2
// val = num1 % num2

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4)
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 44, 55, 3);
// val = Math.max(2, 44, 55, 3);
// val = Math.floor(Math.random() * 20 + 1);


// console.log(val)


// STRINGS METHODS && CONCATENATION

// const firstName = "William";
// const lastName = "Smith";
// const age = 36;
// const str = "Hello there my name is brad"
// const tags = "web design, web development, programminfg"

// let val;


// val = firstName + lastName;

// // Concatenation

// val = firstName + ' ' + lastName;

// // Append (Add to a variable)

// val = "Brad";
// val += "Traversy"

// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping 

// val = 'That\'s awesome, I can\'t wait';

// // Length

// val = firstName.length;

// // concat()

// val = firstName.concat(' ', lastName)

// // Change Case

// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()

// val = firstName.indexOf('l');
// val = firstName.indexOf('l');
// val = firstName.charAt('2');

// // Get last character

// val = firstName.charAt(firstName.length - 1);

// // Substring()

// val = firstName.substring(0, 4)

// // Slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()

// val = str.split(" ")
// val = tags.split(',')

// // replace()

// val = str.replace("brad", "Jack");

// // Includes()

// val = str.includes('Hello')



// console.log(val)


// Template Literals

const name = "John"
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without Template Strings (es6)

html = '<ui><li>Name: ' + name + '</li><li>Age: ' + age +
    ' </li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul> ';

function hello() {
    return 'hello';
}

// With Template Strings (es6)

html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Job: ${job}</li>
        <li>age: ${age}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>

`;


document.body.innerHTML = html;