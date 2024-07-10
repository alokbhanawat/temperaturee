document.getElementById('convertButton').addEventListener('click', () => {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (isNaN(inputTemperature)) {
        output.textContent = 'Please enter a valid number.';
        return;
    }

    let celsius, fahrenheit, kelvin;
    switch (inputUnit) {
        case 'celsius':
            celsius = inputTemperature;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = inputTemperature;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = inputTemperature;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    output.textContent = `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
});
