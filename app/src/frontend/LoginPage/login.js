const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () =>{
    loginBtn.style.backgroundColor = "#ff3131";
    registerBtn.style.backgroundColor = "rgba(255,255,255,0.2)";

    loginForm.style.left = "10%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 10% 30% 0";
});

registerBtn.addEventListener('click', () =>{
    registerBtn.style.backgroundColor = "#ff3131";
    loginBtn.style.backgroundColor = "rgba(255,255,255,0.2)";

    loginForm.style.left = "150%";
    registerForm.style.left = "60%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 30% 10% 0";
});