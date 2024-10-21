const menuOpen = document.querySelector(".menu-open");
const navlists = document.querySelector(".nav-lists");
const menuClose = document.querySelector(".menu-close")

document.addEventListener("DOMContentLoaded", () => {

    menuOpen.addEventListener("click", () => {
        navlists.style.right = "0";
    })

    menuClose.addEventListener("click", () => {
        navlists.style.right = "-200px";
    })

})