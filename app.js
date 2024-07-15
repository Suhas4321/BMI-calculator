window.onload = () => {
    let registerBtn = document.querySelector("#registerBtn");

    registerBtn.addEventListener("click", () => {
        let name = document.querySelector("#name").value.trim();
        let phone = document.querySelector("#phone").value.trim();
        let address = document.querySelector("#address").value.trim();
        let gender = document.querySelector("#gender").value.trim();
        let age = document.querySelector("#age").value.trim();
        let error = document.querySelector(".error-para");

        if (!name || !phone || !address || !gender || !age) {
            error.textContent = "All fields are required!";
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            error.textContent = "Phone number must be 10 digits!";
            return;
        }

        if (!/^\d+$/.test(age)) {
            error.textContent = "Age must be an integer!";
            return;
        }

        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
        localStorage.setItem("gender", gender);
        localStorage.setItem("age", age);

        window.location.href = "bmi.html";
    });

    document.querySelector("#name").addEventListener("input", () => {
        generateUsername();
    });

    document.querySelector("#togglePassword").addEventListener("click", () => {
        let passwordField = document.querySelector("#password");
        let toggleButton = document.querySelector("#togglePassword");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleButton.textContent = "🙈"; // Closed eye icon
        } else {
            passwordField.type = "password";
            toggleButton.textContent = "👁"; // Open eye icon
        }
    });
}

function generatePassword() {
    let length = 12; // Default length of the password
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.querySelector("#password").value = password;
}

function generateUsername() {
    let name = document.querySelector("#name").value.trim();
    let username = name.toLowerCase().replace(/ /g, '_') + Math.floor(Math.random() * 1000);
    document.querySelector("#username").value = username;
}
