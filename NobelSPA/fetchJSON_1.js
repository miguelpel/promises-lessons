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