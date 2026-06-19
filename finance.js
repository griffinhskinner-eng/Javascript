//WEBSITE - https://site.financialmodelingprep.com/

const searchButton = document.getElementById("searchButton");
const tickerInput = document.getElementById("ticker");
const overview = document.getElementById("overview");
const fundamentalsButton = document.getElementById("fundamentals");
const analystRatingsButton = document.getElementById("analystRatings");
const valuationButton = document.getElementById("valuation");
const data = document.getElementById("data");
const apiKey = "LHjJzOt7ulZb4iwojkDh6TCU3JjXXB2D"; //Tracking api key under a constant so that I can use it in all functions, also incase my key doesnt work later you can use one
let company = "" //Sets variable company to nothing until search function outside of the searchOverview so it can be accessed by all
let currentTicker = "";
let valuation = "";

async function searchOverview(){ //Function intended to collect basic API data and display for the user after button is pressed ***async sends whats called a promise which means that the function expects to recieve something back and will throw up an error if nothing retrieved
    const ticker = tickerInput.value.trim().toUpperCase(); //.trim() and .toUpperCase() methods are like strip and upper in python
    const url = "https://financialmodelingprep.com/stable/profile?symbol=" + ticker + "&apikey=" + apiKey; //Concatinate a string with chosen ticker and apikey
    const response = await fetch(url); //await takes whats inside the promise as opposed to just saying something was retrieved and it allows the website to continue to function unti data retrieved
    const data = await response.json(); //Financial Modelling Prep API returns a JSON file (Java Script Notation) - .json retrives this and converts it to an array
    console.log(data)

    if (data.length === 0){
        overview.textContent = "Ticker Not Found.  Please Try Again.";
        return;
    }
    else {
        company = data[0];//data retruns a single object in an array, see console.log to here I set a variable to it... Saving the first value of the array so I know what company to call in other functions
         
        currentTicker = ticker;
        //inner.HTML allows me to use html code from JS to my html and use JS functions inside
        //Note that .toLocaleString() method allows me to cap decimal places

        overview.innerHTML = `
        <h2>${company.companyName}</h2>
        <p><strong>Ticker:</strong> ${company.symbol}</p>
        <p><strong>Price:</strong> $${company.price.toLocaleString()}</p> 
        <p><strong>Market Cap:</strong> $${company.marketCap.toLocaleString()}</p>
        <p><strong>Dividend:</strong> $${company.lastDividend}</p>
        <p><strong>Price Change:</strong> $${company.change.toLocaleString()}</p>
        <p><strong>Percentage Change:</strong> ${company.changePercentage.toLocaleString()}%</p>
        `;
    }
    
}

async function showFundamentals() {

    if (currentTicker === "") {//Checks if no ticker input so user gives us a ticker first
        data.innerHTML = "Please search for a company first.";
        return;
    }

    //Get URLS
    const ratiosUrl = "https://financialmodelingprep.com/stable/ratios?symbol=" + currentTicker + "&apikey=" + apiKey;
  
    const incomeUrl = "https://financialmodelingprep.com/stable/income-statement?symbol=" + currentTicker + "&apikey=" + apiKey;

    const balanceUrl = "https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=" + currentTicker + "&apikey=" + apiKey;

    const cashflowUrl = "https://financialmodelingprep.com/stable/cash-flow-statement?symbol=" + currentTicker + "&apikey=" + apiKey;

    //Retrieving API request from URL and saving it to variables
    const ratiosResponse = await fetch(ratiosUrl);
    const incomeResponse = await fetch(incomeUrl);
    const balanceResponse = await fetch(balanceUrl);
    const cashflowResponse = await fetch(cashflowUrl);

    //Identifying these responses as json files so we can interpret them
    const ratiosData = await ratiosResponse.json();
    const incomeData = await incomeResponse.json();
    const balanceData = await balanceResponse.json();
    const cashData = await cashflowResponse.json();

    //Handling invalid inputs
    if (incomeData.length === 0||balanceData.length === 0||cashData.length === 0){
        data.textContent = "Ticker Not Found.  Please Try Again.";
        return;
    }

    //These statements return arrays of objects with all the data, so we specifiy the first element to access most recent data
    const ratios = ratiosData[0];
    const income = incomeData[0];
    const balance = balanceData[0];
    const cashflow = cashData[0];

    data.innerHTML = `
        <h2>${company.companyName} - Fundamentals</h2>

        <h3>Ratios</h3>
        <p><strong>Price to Earnings:</strong> ${ratios.priceToEarningsRatio.toLocaleString()}</p>
        <p><strong>Price to Sales:</strong> ${ratios.priceToSalesRatio.toLocaleString()}</p>
        <p><strong>Current Ratio:</strong> ${ratios.currentRatio.toLocaleString()}</p>
        <p><strong>Debt to Equity:</strong> ${ratios.debtToEquityRatio.toLocaleString()}</p>
        <p><strong>Free Cash Flow Per Share:</strong> ${ratios.freeCashFlowPerShare.toLocaleString()}</p>

        <hr>

        <h3>Income Statement</h3>
        <p><strong>Revenue:</strong> $${income.revenue.toLocaleString()}</p>
        <p><strong>Gross Profit:</strong> $${income.grossProfit.toLocaleString()}</p>
        <p><strong>Net Income:</strong> $${income.netIncome.toLocaleString()}</p>
        <p><strong>Operating Income:</strong> $${income.operatingIncome.toLocaleString()}</p>
        <p><strong>EBITDA:</strong> $${income.ebitda.toLocaleString()}</p>
        <p><strong>EPS:</strong> $${income.eps}</p>

        <hr>

        <h3>Balance Sheet</h3>
        <p><strong>Cash:</strong> $${balance.cashAndCashEquivalents.toLocaleString()}</p>
        <p><strong>Total Assets:</strong> $${balance.totalAssets.toLocaleString()}</p>
        <p><strong>Total Liabilities:</strong> $${balance.totalLiabilities.toLocaleString()}</p>
        <p><strong>Total Debt:</strong> $${balance.totalDebt.toLocaleString()}</p>
        

        <hr>

        <h3>Cash Flow</h3>
        <p><strong>Operating Cash Flow:</strong> $${cashflow.operatingCashFlow.toLocaleString()}</p>
        <p><strong>Free Cash Flow:</strong> $${cashflow.freeCashFlow.toLocaleString()}</p>
        <p><strong>Capital Expenditures:</strong> $${cashflow.capitalExpenditure.toLocaleString()}</p>
    `;
}

async function showAnalystRatings(){

    if (currentTicker === "") {//Checks if no ticker input so user gives us a ticker first
        data.innerHTML = "Please search for a company first.";
        return;
    }

    const analystRatingsUrl = "https://financialmodelingprep.com/stable/grades-consensus?symbol=" + currentTicker + "&apikey=" + apiKey;

    const analystRatingsResponse = await fetch(analystRatingsUrl);

    const analystRatingsData = await analystRatingsResponse.json();

    if (analystRatingsData.length === 0){
        data.textContent = "Ticker Not Found.  Please Try Again.";
        return;
    }

    const analystRatings = analystRatingsData[0];

    //Note that a canvas allows me to insert charts, graphics, or animations.  I use another id to connect it to the code where I actually build a chart
    data.innerHTML=`
        <h2>${company.companyName} - Analyst Ratings</h2>

        <p><strong>Consensus Rating:</strong> ${analystRatings.consensus}</p>

        <canvas id="ratingsChart"></canvas> 
        
    `
    const chartData = { //New variable to contain all my data in an object, this is required for chart.js
        labels: [
            'Strong Buy',
            'Buy',
            'Neutral',
            'Sell',
            'Strong Sell'

         ],
        datasets: [{ //Datasets is formatted as an object with arrays - key-value pairs
            data: [analystRatings.strongBuy,analystRatings.buy,analystRatings.hold,analystRatings.sell,analystRatings.strongSell],
            backgroundColor: [
            'rgb(46, 117, 89)',   
            'rgb(75, 192, 192)',  
            'rgb(255, 205, 86)',  
            'rgb(255, 159, 64)',  
            'rgb(255, 99, 132)'   
            ],
            hoverOffset: 6 //This makes the chart interactive so that when hovering over it, he slice is pushed out
        }]
        };

    const analystChart = document.getElementById("ratingsChart");

    new Chart(analystChart, { //I use data to make chart
        type: "doughnut",
        data: chartData
        });

}

async function showValuation() {

    if (currentTicker === "") {
        data.innerHTML = "Please search for a company first.";
        return;
    }

    const valuationUrl =
        "https://financialmodelingprep.com/stable/custom-discounted-cash-flow?symbol=" + currentTicker + "&apikey=" + apiKey;

    const response = await fetch(valuationUrl);
    const valuationData = await response.json();

    if (valuationData.length === 0) {
        data.textContent = "Ticker Not Found. Try Again.";
        return;
    }

    const valuation = valuationData[0];

    //Taking user inputs through HTML to get growthrate and terminal growth user wants to test
    data.innerHTML = `
        <h2>${currentTicker} - DCF Valuation</h2>

        <label>Growth Rate (%)</label>
        <input type="number" id="growthRate" value="5">

        <label>Terminal Growth Rate (%)</label>
        <input type="number" id="terminalGrowth" value="3">

        <button id="runDCF">Run DCF</button>

        <div id="dcfResult"></div>
    `;

    //From button in data division, we can run the following dcf function.  Note that we just use function () because I dont need to call this function since it is internal
    //Note that the actual calculation was generated by AI because its fairly complex, but pulling the data and taking input for the rates and uploading the data was me and I could explain the calculations
    const button = document.getElementById("runDCF");

    button.addEventListener("click", function () {

        const growthRate =
            parseFloat(document.getElementById("growthRate").value) / 100;

        const terminalGrowth =
            parseFloat(document.getElementById("terminalGrowth").value) / 100;

        const ufcf = valuation.ufcf;
        const wacc = valuation.wacc / 100;

        //Check if terminal growth is too close to WACC to avoid invalid calculations
        if (terminalGrowth >= wacc) {
            document.getElementById("dcfResult").innerHTML = `
                <h3>Error</h3>
                <p>Terminal Growth Rate must be less than WACC (${(wacc * 100).toFixed(2)}%). Please adjust your inputs.</p>
            `;
            return;
        }

        const projectedFCF = ufcf * (1 + growthRate);

        const pvFCF = projectedFCF / (1 + wacc);

        const terminalValue =
            (projectedFCF * (1 + terminalGrowth)) /
            (wacc - terminalGrowth);

        const pvTerminal = terminalValue / (1 + wacc);

        const enterpriseValue = pvFCF + pvTerminal;

        const equityValue = enterpriseValue - valuation.netDebt;

        const perShare =
            equityValue / valuation.dilutedSharesOutstanding;

        //Use Math.max() to prevent negative values from displaying
        document.getElementById("dcfResult").innerHTML = `
            <h3>Results</h3>
            <p><strong>Enterprise Value:</strong> $${Math.max(0, enterpriseValue).toLocaleString()}</p>
            <p><strong>Equity Value:</strong> $${Math.max(0, equityValue).toLocaleString()}</p>
            <p><strong>Intrinsic Value:</strong> $${Math.max(0, perShare).toFixed(2)}</p>
        `;
    });
}

searchButton.addEventListener("click", searchOverview);

fundamentalsButton.addEventListener("click", showFundamentals);

analystRatingsButton.addEventListener("click", showAnalystRatings);

valuationButton.addEventListener("click", showValuation);
