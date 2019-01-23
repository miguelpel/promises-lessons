let endpoint = 'http://api.nobelprize.org/v1/prize.json?'

document.getElementById('searchBtn').addEventListener('click', searchAndDisplay);

function searchAndDisplay() {
    fetchJSON(createUrl())
        .then(data => display(data))
        .catch(error => renderError(error));
}

function createUrl() {
    let inputs = document.getElementsByTagName('input');
    let category = 'category=' + inputs[0].value;
    let year;
    if (typeof inputs[1].value == 'number') {
        // check for the range
        if (inputs[1].value > 1906 && inputs[1].value < 2018) {
            year = 'year=' + inputs[1].value;
        } else {
            throw new Error('There is no Nobel Prize for this year.')
        }
    } else {
        throw new Error('The year has to be a number, you know...')
    }
    let request = endpoint + category + '&' + year;
    return request;
};

function display(response) {
    response = JSON.parse(response);
    document.getElementById('output').innerHTML = "";
    let laureates = response.prizes[0].laureates;
    for (let i = 0; i < laureates.length; i++) {
        let name = laureates[i].firstname;
        let surname = laureates[i].surname;
        document.getElementById('output').innerHTML += name + ' ' + surname + '<br>';
    }
};

function renderError(error) {
    console.log(error.message);
}