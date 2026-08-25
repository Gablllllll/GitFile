const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {
    const isOpen = navbarLinks.classList.toggle("active");
    navbarToggle.classList.toggle("active", isOpen);
    navbarToggle.setAttribute("aria-expanded", isOpen);
});
navbarLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("active");
        navbarToggle.setAttribute("aria-expanded", "false");
    });
});