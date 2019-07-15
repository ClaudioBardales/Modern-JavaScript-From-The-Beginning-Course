//Template Literals

const name = "John"
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without Template Strings (es6)

html = '<ui><li>Name: ' + name + '</li><li>Age: ' + age +
    ' </li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul> ';

function hello() {
    return 'hello';
}

// With Template Strings (es6)

html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Job: ${job}</li>
        <li>age: ${age}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>

`;


document.body.innerHTML = html;