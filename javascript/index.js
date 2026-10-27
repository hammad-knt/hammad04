
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");
const togglePassword = document.getElementById("togglePassword");

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("invalid");
}

function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("invalid");
}

function clearNameError() {
    clearError(fullNameInput, nameError);
}

function clearEmailError() {
    clearError(emailInput, emailError);
}

function clearPasswordError() {
    clearError(passwordInput, passwordError);
}

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }
}

function login(event) {
    event.preventDefault();

    clearNameError();
    clearEmailError();
    clearPasswordError();

    formMessage.textContent = "";

    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value;

    let isValid = true;

    if (fullName.length < 2) {
        showError(fullNameInput, nameError, "Please enter your full name.");
        isValid = false;
    }

    if (email === "" || email.indexOf("@") === -1 ||
        email.indexOf(".") === -1) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        isValid = false;
    }

    if (password.length < 8) {
        showError(passwordInput, passwordError, "Password must contain at least 8 characters.");
        isValid = false;
    }

    if (isValid === false) {
        formMessage.textContent = "Please correct the errors above.";
    } else {
        sessionStorage.setItem("studentName", fullName);
        sessionStorage.setItem("studentEmail", email);

  window.location.href = "../webpages/exam.html";
    }
}
