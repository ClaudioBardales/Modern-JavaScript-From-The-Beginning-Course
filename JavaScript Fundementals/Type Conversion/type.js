// TYPE CONVERSION

let val;

// Number to String
val = String(53333);
val = String(4 + 4);

// Boolean to String
val = String(true)

// Date to String
val = String(new Date())
    // Array to String
val = String([1, 2, 4, 5, 5])

// toString()
val = (5).toString();

// You can use either or

// String to Number

val = Number("5");
val = Number(true);
val = Number(false);
val = Number("Hello");

val = parseInt("100,30");
val = parseFloat("100.30")



// output

console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2))


// Type Cohercion

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum)