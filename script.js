document.addEventListener("DOMContentLoaded", function () {
    console.log("Bit-Digital Trades & Mining website loaded!");
})
document.addEventListener("DOMContentLoaded", function () {
    console.log("Bit-Digital Trades & Mining website loaded!");

    // Check if we're on the Live Prices page
    if (document.querySelector(".prices")) {
        fetchCryptoPrices();
    }
});

// Function to fetch crypto prices
function fetchCryptoPrices() {
    const tableBody = document.getElementById("crypto-table");

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano,solana&vs_currencies=usd&include_24hr_change=true")
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = "";
            
            const cryptos = [
                { id: "bitcoin", name: "Bitcoin" },
                { id: "ethereum", name: "Ethereum" },
                { id: "ripple", name: "Ripple" },
                { id: "cardano", name: "Cardano" },
                { id: "solana", name: "Solana" }
            ];

            cryptos.forEach(crypto => {
                const price = data[crypto.id].usd.toFixed(2);
                const change = data[crypto.id].usd_24h_change.toFixed(2);
                const changeClass = change >= 0 ? "green" : "red";

                const row = `
                    <tr>
                        <td>${crypto.name}</td>
                        <td>$${price}</td>
                        <td class="${changeClass}">${change}%</td>
                    </tr>
                `;

                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Error fetching crypto prices:", error);
            tableBody.innerHTML = "<tr><td colspan='3'>Failed to load data.</td></tr>";
        });
                    }
