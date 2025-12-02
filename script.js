const API_URL = "https://api.coinlore.net/api/tickers/";
const cryptoList = document.getElementById("cryptoList");
const refreshBtn = document.getElementById("reloadBtn");

async function loadCrypto() {
    cryptoList.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        
        cryptoList.innerHTML = "";

        json.data.slice(0, 10).forEach(item => {
            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
                <p><strong>Rank:</strong> ${item.rank}</p>
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Symbol:</strong> ${item.symbol}</p>
                <p><strong>Price:</strong> $${item.price_usd}</p>
            `;
            cryptoList.appendChild(div);
        });

    } catch (err) {
        cryptoList.innerHTML = `<p style="color:red;">Error loading data</p>`;
    }
}

refreshBtn.addEventListener("click", loadCrypto);

// Load saat halaman dibuka
loadCrypto();