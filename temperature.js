const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

function convertTemperature() {
    const temperature = Number(temperatureInput.value);

    if (fromUnit.value === "C" && toUnit.value === "C") {
        result.textContent = temperature.toFixed(2) + "°C";
    }

    else if (fromUnit.value === "C" && toUnit.value === "F") {
        result.textContent = (temperature * 9 / 5 + 32).toFixed(2) + "°F";
    }

    else if (fromUnit.value === "C" && toUnit.value === "K") {
        result.textContent = (temperature + 273.15).toFixed(2) + "°K";
    }

    else if (fromUnit.value === "F" && toUnit.value === "C") {
        result.textContent = ((temperature - 32) * 5 / 9).toFixed(2) + "°C";
    }

    else if (fromUnit.value === "F" && toUnit.value === "F") {
        result.textContent = (temperature).toFixed(2) + "°F";
    }

    else if (fromUnit.value === "F" && toUnit.value === "K") {
        result.textContent = ((temperature - 32) * 5 / 9 + 273.15).toFixed(2) + "°K";
    }

    else if (fromUnit.value === "K" && toUnit.value === "C") {
        result.textContent = (temperature - 273.15).toFixed(2) + "°C";
    }

    else if (fromUnit.value === "K" && toUnit.value === "F") {
        result.textContent = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2) + "°F";
    }

    else if (fromUnit.value === "K" && toUnit.value === "K") {
        result.textContent = (temperature).toFixed(2) + "°K";
    }

    
}

convertButton.addEventListener("click", convertTemperature);