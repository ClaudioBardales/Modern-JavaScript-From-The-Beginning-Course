try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError

    null.myFunction(); // This couses a type Error.
} catch (e) {
    console.log(e.message);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);

} finally {
    console.log('Finally Runs regardless of result....')
}

console.log('Program continues....')