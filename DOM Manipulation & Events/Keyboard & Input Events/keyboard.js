const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');



// Clearn input
taskInput.value = ''; // Get rid of the value of the form;

// form.addEventListener('submit', runEvent);


// taskInput.addEventListener('keydown', runEvent); // Key Down

// taskInput.addEventListener('keyup', runEvent); // Key Up

// taskInput.addEventListener('keypress', runEvent); // Key Press

// taskInput.addEventListener('focus', runEvent); // Focus


// taskInput.addEventListener('blur', runEvent); // Blur

// taskInput.addEventListener('cut', runEvent); // Cut

// taskInput.addEventListener('paste', runEvent); // paste 

// taskInput.addEventListener('input', runEvent); // input

select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    heading.innerText = e.target.value

    // // Get input value
    // console.log(taskInput.value);


    // e.preventDefault();
}