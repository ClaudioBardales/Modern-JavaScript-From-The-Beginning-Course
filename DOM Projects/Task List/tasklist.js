// WHEN YOU DO A PROJECT ALWAYS DEFINE VARIABLES FIRST.


// DEFINE UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

console.log(taskInput.value);

// Load all event listerners

loadEventListeners();

// Load all event listners

function loadEventListeners() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask)
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li'); // Create Li Element

        li.className = 'collection-item'; // add class

        // Create text node and append to li

        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');

        // Add Class
        link.className = 'delete-item secondary-content';

        // Add Icon html

        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append the link to li

        li.appendChild(link);

        // Append the li to the ul

        taskList.appendChild(li);
    });
}


function addTask(event) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    const li = document.createElement('li'); // Create Li Element

    li.className = 'collection-item'; // add class

    // Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    // Add Class
    link.className = 'delete-item secondary-content';

    // Add Icon html

    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li

    li.appendChild(link);

    // Append the li to the ul

    taskList.appendChild(li);

    // Store in Local Storage

    storeTaskInLocalStorage(taskInput.value);


    // Store task

    function storeTaskInLocalStorage(task) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    taskInput.value = '';

    event.preventDefault();

}

// Remove task

function removeTask(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();

            // Remove from Local Storage

            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }

    function removeTaskFromLocalStorage(taskItem) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            task.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear Tasks

function clearTask() {
    // tasklist.innerHTML = '';

    // Faster Way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS

    clearTasksFromLocalStorage();

    function clearTasksFromLocalStorage() {
        localStorage.clear()
    }
}

// Filter tasks

function filterTasks(event) {
    const text = event.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

// Why are we calling the function first? Shouldn't we call the function after we make it?

// Because in javascript there is this feature called hoisting. Which means that you can call the function anywhere in the script.

// Why do we need a single function to run all of the event listeners?