function convertTemperature() {
    // Get Celsius input value
    var celsiusInput = document.getElementById("celsiusInput").value;

    // Check if the input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert Celsius to Fahrenheit
        var fahrenheit = (celsiusInput * 9/5) + 32;

        // Display the converted temperature
        document.getElementById("convertedTemperature").innerText = fahrenheit.toFixed(2) + " °F";
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById("convertedTemperature").innerText = "Invalid input";
    }
}

function clearInputs() {
    // Clear input and result fields
    document.getElementById("celsiusInput").value = "";
    document.getElementById("convertedTemperature").innerText = "";
}
