document.addEventListener("DOMContentLoaded", function () {
    const perfilIcon = document.getElementById("perfil-icon");
    const menu = document.getElementById("menu");

    perfilIcon.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!perfilIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});