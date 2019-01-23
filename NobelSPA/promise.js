let endpoint = 'http://api.nobelprize.org/v1/prize.json?'
let request;

document.getElementById('searchBtn').addEventListener('click', searchAndDisplay);

function searchAndDisplay() {
    try {
        let response = fetchJSON(createUrl());
        response.then(data => display(data));
    } catch (error) {
        console.log(error)
    }
}

function createUrl() {
    let inputs = document.getElementsByTagName('input');
    let category = 'category=' + inputs[0].value;
    let year;
    if (typeof Number(inputs[1].value) == 'number') {
        // check for the range
        if (inputs[1].value > 1900 && inputs[1].value < 2018) {
            year = 'year=' + inputs[1].value;
        } else {
            throw new Error('There is no Nobel Prize for this year.')
        }
    } else {
        throw new Error('The years have to be a number, you know...')
    }
    let request = endpoint + category + '&' + year;
    return request;
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
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.respnseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        };
        xhr.send();
    });
}