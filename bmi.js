window.onload = () => {
    let calculateBtn = document.querySelector("#calculateBtn");

    calculateBtn.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Provide a valid Height!";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide a valid Weight!";
        return;
    }

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        result.innerHTML = `Under Weight : <span>${bmi}</span><br>Tips: Eat more calories, increase protein intake, and strength train regularly.`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = `Normal : <span>${bmi}</span><br>Tips: Maintain a balanced diet, exercise regularly, and stay hydrated.`;
    } else {
        result.innerHTML = `Over Weight : <span>${bmi}</span><br>Tips: Reduce calorie intake, increase physical activity, and avoid sugary drinks.`;
    }
}
