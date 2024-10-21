import "bootstrap/dist/css/bootstrap.min.css"
const navLinks = document.querySelectorAll(".nav-links")

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove("active")
        navLink.classList.add("active")
    })
})