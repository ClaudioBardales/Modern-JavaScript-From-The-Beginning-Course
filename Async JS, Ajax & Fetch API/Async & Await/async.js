// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 3000)
//     });

//     const error = false;

//     if (!error) {
//         const res = await promise; // Wait until promise is resolved;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something Went wrong'))
//     }


// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUsers() {
    // await response of the fetch call

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceeds one its resolved
    const data = await response.json();

    // Only proceeds once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));