const menuOpen = document.querySelector(".menu-open");
const navlists = document.querySelector(".nav-lists");
const menuClose = document.querySelector(".menu-close");
const navBtn = document.querySelector(".nav-btns");

document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");


    // Determine the base URL dynamically
    // const baseUrl = location.pathname.split('/').slice(0, -1).join('/') + '/';


    if (userName) {
        // Create logged-in content
        navBtn.innerHTML = `
            <span class="user-name">Welcome, ${userName}</span>
            <button class="btn btn-secondary logout-btn">Logout</button>
        `;

        // Attach logout functionality
        const logoutBtn = navBtn.querySelector(".logout-btn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("userName"); // Clear user data
            location.reload(); // Reload to reset navbar
        });
    } else {
        // Create login/signup content
        navBtn.innerHTML = `
            <a href="${baseUrl}/login.html"><button class="btn btn-primary login btn-size">Login</button></a>
            <a href="${baseUrl}/signup.html"><button class="btn btn-primary btn-size">Signup</button></a>
        `;
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
