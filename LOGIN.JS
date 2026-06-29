function loginNow() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    let valid = true;

    // Reset previous styles
    username.classList.remove("error-border");
    password.classList.remove("error-border");
    userError.style.display = "none";
    passError.style.display = "none";

    // Check username
    if (username.value.trim() === "") {
        username.classList.add("error-border");
        userError.innerText = "Please enter your username";
        userError.style.display = "block";
        valid = false;
    }

    // Check password
    if (password.value.trim() === "") {
        password.classList.add("error-border");
        passError.innerText = "Please enter your password";
        passError.style.display = "block";
        valid = false;
    }

    // If all fields are filled → redirect
    if (valid) {
        window.location.href = "../../CUSTOMERSELECTIONPAGE/CUSTOMERSELECTIONPAGE.html";

    }
}
