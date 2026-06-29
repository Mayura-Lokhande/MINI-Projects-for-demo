
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");


function switchForm(type) {
    if (!loginForm || !loginText) return;

    const isSignup = type === "signup";

    loginForm.style.marginLeft = isSignup ? "-50%" : "0%";
    loginText.style.marginLeft = isSignup ? "-50%" : "0%";
}


if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        switchForm("signup");
    });
}


if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        switchForm("login");
    });
}


if (signupLink) {
    signupLink.addEventListener("click", (event) => {
        event.preventDefault();
        switchForm("signup");
    });
}


// Optional: handle login submit
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = loginForm.querySelector("input[type='text']");
        const password = loginForm.querySelector("input[type='password']");

        if (!email.value || !password.value) {
            alert("Please enter email and password");
            return;
        }

        console.log("Login successful");
    });
}