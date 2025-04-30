let signup = window.document.querySelector("a#signup");
signup.addEventListener("click", 
    function () {
        let loginForm = window.document.querySelector("section#login-form");
        if (loginForm.style.display == "block") {
            loginForm.style.display = "none";
        }
        else {
            loginForm.style.display = "block";
        }
    }
)