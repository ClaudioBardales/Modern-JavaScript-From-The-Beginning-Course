// FUNCTION DECLARATIONS

function greet(firstName = 'claudio', lastName = 'bardales') {
    //console.log('Hello')
    return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet());


// FUNCTION EXPRESSIONS


const square = function(x) {
    return x * x
};

// console.log(square(8))


// IMMEDIATLY INVOLKABLE FUNCTION EXPRESSION - IIFES

(function(name) {
    console.log(`Hello ${name}`)
})('Claudio');

// PROPERTY METHODS

const todo = {
    add: function() {
        console.log('Add todo ...')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();