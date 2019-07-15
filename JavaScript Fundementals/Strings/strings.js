// STRINGS METHODS && CONCATENATION

const firstName = "William";
const lastName = "Smith";
const age = 36;
const str = "Hello there my name is brad"
const tags = "web design, web development, programminfg"

let val;


val = firstName + lastName;

// Concatenation

val = firstName + ' ' + lastName;

// Append (Add to a variable)

val = "Brad";
val += "Traversy"

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping 

val = 'That\'s awesome, I can\'t wait';

// Length

val = firstName.length;

// concat()

val = firstName.concat(' ', lastName)

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()

val = firstName.indexOf('l');
val = firstName.indexOf('l');
val = firstName.charAt('2');

// Get last character

val = firstName.charAt(firstName.length - 1);

// Substring()

val = firstName.substring(0, 4)

// Slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()

val = str.split(" ")
val = tags.split(',')

// replace()

val = str.replace("brad", "Jack");

// Includes()

val = str.includes('Hello')



console.log(val)