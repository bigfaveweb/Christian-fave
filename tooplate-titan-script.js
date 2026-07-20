
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");

    });

});
