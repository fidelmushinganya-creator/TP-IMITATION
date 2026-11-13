document.getElementById("loginForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const matricule = document.querySelector(
        'input[type="text"]'
    ).value;

    const password = document.querySelector(
        'input[type="password"]'
    ).value;

    if (
        matricule === "DEMO45438" &&
        password === "DEMO2026"
    ) {
        window.location.href = "tableau.html";
    } else {
        document.getElementById("message").textContent =
        "Identifiants de démonstration incorrects.";
    }
});
