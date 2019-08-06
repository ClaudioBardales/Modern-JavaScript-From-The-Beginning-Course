// let re;

// re = /hello/i; // i = case insensitive
// re = /hello/g; // g - global search

// console.log(re);
// console.log(re.source); // Give us the expression insde of the slashes


// Exec() - Return results in an array or null

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// Test() - returns true or false

// const result = re.test('Hello');
// console.log(result);


//Match() - return result array or null

// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

// Search() - Will return the index of the first match if not found it returns -1

// const str = '10 hello there';

// const result = str.search(re);

// console.log(result);

// Replace () - return new string with some or all matches of a pattern

// const str = 'Hello There';

// const newStr = str.replace(re, 'Hi')

// console.log(newStr);


let re;
// Literal Characters

re = /hello/;
re = /hello/i;

// Metacharacter symbols

re = /^h/i; // Must Start With
re = /world$/i; // Must End With
re = /^hello$/i; // Must start and ends with
re = /^h.llo$/i; // Matches any one character
re = /h*llo/i; // Matches any one character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// Brackets [] - Character Sets

re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an G or F Case sensitive
re = /[^GF]ray/i; // Match anything except G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any Lower Case letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any Lower Case letter


// Braces {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2, 4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur exactly {m} amount of times


// Parentheses () - grouping

re = /^([0-9]x){3}$/;

// Shorthand character classes

re = /\w/; // Word character - alphanumeric or underscore
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character - alphanumeric or underscore
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match Whitespace char
re = /\S/; // Match Non-Whitespace char
re = /Hell\b/i; // Word boundry


// Assertions

re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y







// String to match
const str = 'xdygvlkdsfngfkdsnghslkdng';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);