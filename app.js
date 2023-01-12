const api = "https://api.escuelajs.co/api/v1/products/"

window
    .fetch(api)
    .then((response) => response.json())
    .then(responseJson => {
        console.log(responseJson);
    })