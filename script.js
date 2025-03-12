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

document.addEventListener("DOMContentLoaded", function () {
    console.log("Bit-Digital Trades & Mining website loaded!");

    if (document.querySelector(".wallet")) {
        loadWalletBalance();
    }
});

let walletBalance = localStorage.getItem("walletBalance") 
    ? parseFloat(localStorage.getItem("walletBalance")) 
    : 1000; // Default starting balance

// Function to load wallet balance
function loadWalletBalance() {
    document.getElementById("wallet-balance").innerText = walletBalance.toFixed(2);
}

// Function to deposit funds
function depositFunds() {
    let depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount to deposit.");
        return;
    }

    walletBalance += depositAmount;
    localStorage.setItem("walletBalance", walletBalance);
    loadWalletBalance();
    alert(`Deposited $${depositAmount.toFixed(2)} successfully!`);
}

// Function to withdraw funds
function withdrawFunds() {
    let withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    if (withdrawAmount > walletBalance) {
        alert("Insufficient balance!");
        return;
    }

    walletBalance -= withdrawAmount;
    localStorage.setItem("walletBalance", walletBalance);
    loadWalletBalance();
    alert(`Withdrawn $${withdrawAmount.toFixed(2)} successfully!`);
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Bit-Digital Trades & Mining website loaded!");

    if (document.querySelector(".mining-calculator")) {
        document.getElementById("daily-earnings").innerText = "$0.00";
    }
});

// Function to calculate mining earnings
function calculateMiningProfit() {
    const hashrate = parseFloat(document.getElementById("hashrate").value);
    const power = parseFloat(document.getElementById("power").value);
    const cost = parseFloat(document.getElementById("cost").value);

    if (isNaN(hashrate) || isNaN(power) || isNaN(cost) || hashrate <= 0 || power <= 0 || cost <= 0) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const miningRewardPerTH = 0.0006; // Example reward per TH/s per day
    const electricityCostPerDay = (power / 1000) * 24 * cost;
    const miningEarningsPerDay = hashrate * miningRewardPerTH * 50000; // Assume BTC at $50,000
    const netEarnings = miningEarningsPerDay - electricityCostPerDay;

    document.getElementById("daily-earnings").innerText = `$${netEarnings.toFixed(2)}`;
}
