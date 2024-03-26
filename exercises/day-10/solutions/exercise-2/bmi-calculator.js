// This function is called when the user clicks the "Calculate BMI" button
function calculateBMI() {
    // Retrieve the value entered in the 'weight' input field
    var weight = document.getElementById('weight').value;
    // Retrieve the value entered in the 'height' input field
    var height = document.getElementById('height').value;
    // Determine which system (metric or imperial) is selected
    var system = document.querySelector('input[name="system"]:checked').value;
    // Initialize the BMI variable
    var bmi = 0;

    // Check if the metric system is selected
    if (system === 'metric') {
        // Calculate BMI using metric units: BMI = weight (kg) / [height (m)]^2
        bmi = weight / ((height / 100) ** 2);
    } else {
        // Calculate BMI using imperial units: BMI = 703 * weight (lbs) / [height (in)]^2
        bmi = 703 * weight / (height ** 2);
    }

    // Round the BMI to two decimal places for better readability
    var resultText = bmi.toFixed(2);

    // Determine the BMI category and append it to the result text
    if (bmi < 18.5) {
        resultText += " - Underweight";
    } else if (bmi < 25) {
        resultText += " - Normal weight range";
    } else if (bmi < 30) {
        resultText += " - Overweight";
    } else {
        resultText += " - Obesity";
    }

    // Display the result text in the 'result' div element
    document.getElementById('result').textContent = resultText;
}

// Add an event listener to the radio buttons for the system (metric or imperial)
document.querySelectorAll('input[name="system"]').forEach(input => {
    input.addEventListener('change', function() {
        // When the system is changed, update the weight and height units accordingly
        var weightUnit = document.getElementById('weightUnit');
        var heightUnit = document.getElementById('heightUnit');

        // If the metric system is selected, show 'KG' and 'CM'
        if (this.value === 'metric') {
            weightUnit.textContent = 'KG';
            heightUnit.textContent = 'CM';
        } else {
            // If the imperial system is selected, show 'lbs' and 'in'
            weightUnit.textContent = 'lbs';
            heightUnit.textContent = 'in';
        }
    });
});
