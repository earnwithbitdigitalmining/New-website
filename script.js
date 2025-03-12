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
document.addEventListener("DOMContentLoaded", function () {
    console.log("Bit-Digital Trades & Mining website loaded!");

    if (document.querySelector(".dashboard")) {
        loadDashboardData();
    }
});

// Function to load dashboard data
function loadDashboardData() {
    document.getElementById("balance").innerText = (Math.random() * 5000).toFixed(2);

    const trades = [
        "Bought 0.05 BTC at $50,000",
        "Sold 1.2 ETH at $3,500",
        "Bought 500 ADA at $1.25",
        "Sold 100 SOL at $150"
    ];

    const tradeList = document.getElementById("trade-list");
    tradeList.innerHTML = "";
    trades.forEach(trade => {
        const li = document.createElement("li");
        li.textContent = trade;
        tradeList.appendChild(li);
    });

    loadMarketChart();
}

// Function to load market trends chart
function loadMarketChart() {
    const ctx = document.getElementById("marketChart").getContext("2d");
    
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Bitcoin Price (USD)",
                data: [42000, 45000, 47000, 46000, 49000, 51000],
                borderColor: "#f39c12",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: false }
            }
        }
    });
                }
