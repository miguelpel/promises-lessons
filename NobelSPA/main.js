let endpoint = 'http://api.nobelprize.org/v1/prize.json?'
let xhr;
let response;

document.getElementById('searchBtn').addEventListener('click', sendRequest);

function sendRequest() {
    xhr = new XMLHttpRequest();
    let inputs = document.getElementsByTagName('input');
    let category = 'category=' + inputs[0].value;
    console.log(inputs[0].value);
    let year = 'year=' + inputs[1].value;
    console.log(inputs[1].value);
    let request = endpoint + category + '&' + year;
    xhr.open('GET', request, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById('output').innerHTML = "";
        response = JSON.parse(xhr.responseText);
        console.log(response);
        let laureates = response.prizes[0].laureates;
        for (let i = 0; i < laureates.length; i++) {
            let name = laureates[i].firstname;
            let surname = laureates[i].surname;
            document.getElementById('output').innerHTML += name + ' ' + surname + '<br>';
        }
        // let motivation = laureates[0].motivation;
        // if (motivation) document.getElementById('output').innerHTML += motivation + '<br>';
    } else {
        document.getElementById('output').innerHTML = xhr.responseText;
    }
}