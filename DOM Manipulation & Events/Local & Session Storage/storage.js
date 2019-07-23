// set local storage item


// localStorage.setItem('name', 'John');

// localStorage.setItem('age', '30');

// // SET SESSION STORAGE ITEM

// // sessionStorage.setItem('name', 'Beth');


// // REMOVE from storage

// // localStorage.removeItem('name');

// // get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// // Clear Local Storage

// localStorage.clear();

// console.log(name, age);


document.querySelector('form').addEventListener('submit',
    function(e) {
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));


        alert('Tasks Saved');

        e.preventDefault();

    });


const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);

tasks.forEach(function(task) {
    console.log(task);
});