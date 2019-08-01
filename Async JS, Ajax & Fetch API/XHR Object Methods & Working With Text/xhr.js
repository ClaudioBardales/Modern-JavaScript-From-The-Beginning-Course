document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an xhr obj

    const xhr = new XMLHttpRequest();

    // OPEN

    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders

    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    };

    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };
    xhr.send();
}