const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');



// Click

// clearBtn.addEventListener('click', runEvent);

// // Double Click

// clearBtn.addEventListener('dbclick', runEvent);

// // Mouse Down

// clearBtn.addEventListener('mousedown', runEvent);

// Mouse UP

// clearBtn.addEventListener('mouseup', runEvent);


// // MOUSE ENTER

// card.addEventListener('mouseenter', runEvent);

// // Mouse Leave

// card.addEventListener('mouseleave', runEvent);

// // MOUSE OVER

// card.addEventListener('mouseover', runEvent);

// // Mouse Leave

// card.addEventListener('mouseout', runEvent);

// Mouse Move

// card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`
}