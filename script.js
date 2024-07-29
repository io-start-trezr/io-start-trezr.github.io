const bingApiKey = '7afdc02e9a464b4b9b9df4c4c9d39166';

function search() {
    const query = document.getElementById('search-query').value;
    searchGoogle(query);
    searchBing(query);
}

function searchBing(query) {
    const url = `https://api.bing.microsoft.com/v7.0/search?q=${query}&count=10`;

    fetch(url, {
        headers: { 'Ocp-Apim-Subscription-Key': bingApiKey }
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data.webPages.value, 'Bing');
    })
    .catch(error => console.error('Error:', error));
}
