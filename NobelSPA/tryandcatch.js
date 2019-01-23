let endpoint = 'http://api.nobelprize.org/v1/prize.json?'
let request;

document.getElementById('searchBtn').addEventListener('click', searchAndDisplay);

function searchAndDisplay() {
    createUrl();
    try {
        let response = fetchJSON(request);
        display(response);
        // let response = fetchJSON(request);
        // response.then(data => display(data));
    } catch (error) {
        console.log(error)
    }
}

function createUrl() {
    let inputs = document.getElementsByTagName('input');
    let category = 'category=' + inputs[0].value;
    let year = 'year=' + inputs[1].value;
    request = endpoint + category + '&' + year;
};

function display(data) {
    // console.log(data);
    let answer = JSON.parse(data);
    document.getElementById('output').innerHTML = "";
    let laureates = answer.prizes[0].laureates;
    for (let i = 0; i < laureates.length; i++) {
        let name = laureates[i].firstname;
        let surname = laureates[i].surname;
        document.getElementById('output').innerHTML += name + ' ' + surname + '<br>';
    }
};


function fetchJSON(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.respnseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                return xhr.response;
            } else {
                throw new Error(xhr.statusText)
            }
        }
    };
    xhr.send();
}

// function fetchJSON(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.respnseType = 'json';
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status < 400) {
//                     resolve(xhr.response);
//                 } else {
//                     reject(new Error(xhr.statusText));
//                 }
//             }
//         };
//         xhr.send();
//     });
// }