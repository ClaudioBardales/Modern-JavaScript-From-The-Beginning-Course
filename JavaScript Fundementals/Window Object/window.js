// WINDOW METHODS / OBJECTS/ PROPERTIES

// Alert

// alert('Hello');

// // Prompt == Same as Alert but Takes An input

// const input = prompt();
// alert(input);


// // Comfirm

// // if (confirm('Are you sure')) {
// //     console.log('YESS');
// // } else {
// //     console.log('NOOOO')
// // }

// Outter height and width

let val;

val = window.outerHeight;
val = window.outerWidth;


// Inner height and width


val = window.innerHeight;
val = window.innerWidth;


// Scroll Points

val = window.scrollY;
val = window.scrollX;

// Location object

val = window.location;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//Redirect

// window.location.href = "http://google.com"

// RELOAD

// window.location.reload();

// HISTORY OBJECT

// window.history.go();

val = window.history.length;


// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val)