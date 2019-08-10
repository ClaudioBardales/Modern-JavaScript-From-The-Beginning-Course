class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subcribed to ${fn.name}`)
    }

    unsubscribe(fn) {
        // Filter out from the list whatever matches the callback
        // function. if there is no match, the callback gets to stay on the list.
        // The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubcribed from the ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => {
            item.call();
        })
    }
}



const click = new EventObserver();

// Create our event listners

document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});


document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});


document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

// Clikc Handler

const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}