let sigin = window.document.querySelector("a#sigin");
sigin.addEventListener("click", 
    function () {
        let loginForm = window.document.querySelector("div#login-form");
        if (loginForm.style.display == "block") {
            loginForm.style.display = "none";
        }
        else {
            loginForm.style.display = "block";
        }
    }
)