const searchButton = document.getElementById("searchButton");
const tickerInput = document.getElementById("ticker");
const overview = document.getElementById("overview");
const fundamentalsButton = document.getElementById("fundamentals");
const analystRatingsButton = document.getElementById("analystRatings");
const valuationButton = document.getElementById("valuation");
const aiAnalysisButton = document.getElementById("aiAnalysis");
const data = document.getElementById("data");
const apiKey = "LHjJzOt7ulZb4iwojkDh6TCU3JjXXB2D"; //Tracking api key under a constant so that I can use it in all functions, also incase my key doesnt work later you can use one
let company = null //Sets variable company to nothing until search function outside of the searchOverview so it can be accessed by all

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
        const company = data[0];//data retruns a single object in an array, see console.log to here I set a variable to it... Saving the first value of the array so I know what company to call in other functions

        //inner.HTML allows me to use html code from JS to my html

        overview.innerHTML = `
        <h2>${company.companyName}</h2>
        <p><strong>Ticker:</strong> ${company.symbol}</p>
        <p><strong>Price:</strong> $${company.price.toLocaleString()}</p>
        <p><strong>Market Cap:</strong> $${company.marketCap.toLocaleString()}</p>
        <p><strong>Dividend:</strong> $${company.lastDividend}</p>
        <p><strong>Price Change:</strong> $${company.change.toLocaleString()}</p>
        <p><strong>Percentage Change:</strong> ${company.changePercentage}%</p>
        `;
    }
    
}




searchButton.addEventListener("click", searchOverview);

fundamentalsButton.addEventListener("click", showFundamentals);

analystRatingsButton.addEventListener("click", showAnalystRatings);

valuationButton.addEventListener("click", showValuation);

aiAnalysisButton.addEventListener("click", showAIAnalysis);