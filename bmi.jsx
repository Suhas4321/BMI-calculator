window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid Height!";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid Weight!";
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span><br>Consider a balanced diet rich in proteins and calories.`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span><br>Maintain a balanced diet and regular exercise.`;
        } else {
            result.innerHTML = `Over Weight : <span>${bmi}</span><br>Incorporate a healthy diet and regular physical activity.`;
        }
    }
}
