const btn = document.getElementById('viewSource');
const cons = document.getElementById('console');
let xhr;

btn.addEventListener('click', displaySourceCode);

function displaySourceCode() {
    xhr = new XMLHttpRequest();
    // Open the request
    xhr.open("GET", './main.js', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
    console.log('called');
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        cons.innerHTML = xhr.responseText.toString();
    }
}