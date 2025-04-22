const menuOpen = document.querySelector(".menu-open");
const navlists = document.querySelector(".nav-lists");
const menuClose = document.querySelector(".menu-close");
const navBtn = document.querySelector(".nav-btns");
const loggedIn = document.querySelector(".logged-in")

document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");


    // Determine the base URL dynamically
    // const baseUrl = location.pathname.split('/').slice(0, -1).join('/') + '/';


    if (userName) {
        // Create logged-in content
        navBtn.innerHTML = `
       
        <a href="../../pages/profile.html">
            <img class="profile" src="../../public/download (1).png" alt="Profile" height="40px" width="40px" style="border-radius: 50%; margin-left: 10px;">
        </a>
        <button class="btn btn-danger logout-btn" style="margin-left: 10px;">Logout</button>
    `;


       
        const logoutBtn = navBtn.querySelector(".logout-btn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("userName"); // Clear user data
            location.reload(); // Reload to reset navbar
        });
        
    }

    // Make the nav-btns visible after determining the state
    navBtn.style.visibility = "visible";

    // Navbar menu toggling
    menuOpen.addEventListener("click", () => {
        navlists.style.right = "0";
    });

    menuClose.addEventListener("click", () => {
        navlists.style.right = "-200px";
    });
});
