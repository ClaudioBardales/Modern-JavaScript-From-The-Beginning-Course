// // Iterator Example

// function nameIterator() {
//     let nextIndex = 0;


//     return {
//         next: function() {
//             return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
//         }
//     }
// }

// // Create and array of name

// const nameArr = ['Jack', 'Jill', 'John'];

// // Init iterator and pass in the name array

// const names = nameIterator(nameArr);

// console.log(names.next());


// Generator

// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// console.log(name.next().value);

// ID Creator

// function* createIds() {
//     let index = 0;

//     while (true) {
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);