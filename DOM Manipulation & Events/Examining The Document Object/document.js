let val;


val = document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;


val = document.links;
val = document.links[0];
val = document.id;
val = document.links[0].className;
val = document.links[0].classList[0];
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;


let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
    console.log(script);
})
console.log(val);