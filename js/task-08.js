const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        alert("Усі поля мають бути заповнені!");
        return;
    }

    const data = {
        email: email,
        password: password
    }
    loginForm.reset();
})