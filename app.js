document.addEventListener('DOMContentLoaded', function() {
    fetchCryptoPrices();
});

function fetchCryptoPrices() {
    const apiURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('BTC').textContent = data.bitcoin.usd;
            document.getElementById('ETH').textContent = data.ethereum.usd;
            document.getElementById('DOGE').textContent = data.dogecoin.usd;
        })
        .catch(error => console.error('Error fetching crypto prices:', error));
}