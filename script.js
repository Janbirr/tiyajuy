// ================================
// CHANGE YOUR PASSWORD HERE
// ================================

const PASSWORD = "082326";


// ================================
// PASSWORD FUNCTION
// ================================

function openLetter() {

    const input = document.getElementById("passwordInput");
    const error = document.getElementById("errorMessage");

    if (input.value === PASSWORD) {

        document.getElementById("passwordScreen").style.display = "none";

        document.getElementById("letterScreen").style.display = "flex";

    } else {

        error.textContent = "Wrong password 💔";

        input.value = "";

        input.style.borderColor = "#d32f2f";

        setTimeout(function () {

            input.style.borderColor = "#f2b6c5";
            error.textContent = "";

        }, 2000);
    }
}


// ================================
// PRESS ENTER TO OPEN
// ================================

document.getElementById("passwordInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {
            openLetter();
        }

    }
);

