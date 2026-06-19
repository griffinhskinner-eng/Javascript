const searchButton = document.getElementById("searchButton");
const tickerInput = document.getElementById("ticker");
const overview = document.getElementById("overview");
const fundamentalsButton = document.getElementById("fundamentals");
const analystRatingsButton = document.getElementById("analystRatings");
const valuationButton = document.getElementById("valuation");
const aiAnalysisButton = document.getElementById("aiAnalysis");
const data = document.getElementById("data");
const apiKey = "LHjJzOt7ulZb4iwojkDh6TCU3JjXXB2D"; //Tracking api key under a constant so that I can use it in all functions, also incase my key doesnt work later you can use one
let company = "" //Sets variable company to nothing until search function outside of the searchOverview so it can be accessed by all
let currentTicker = "";

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
        overview.textContent = "Ticker Not Found.  Please Try Again.";
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


searchButton.addEventListener("click", searchOverview);

fundamentalsButton.addEventListener("click", showFundamentals);

/*analystRatingsButton.addEventListener("click", showAnalystRatings);

valuationButton.addEventListener("click", showValuation);

aiAnalysisButton.addEventListener("click", showAIAnalysis);*/