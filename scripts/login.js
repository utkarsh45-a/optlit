// import { shToast, danger } from "../modules/toast"

import { shToast, success } from "../modules/toast";



// const loginBtn = document.querySelector(".login-btn")

// loginBtn.addEventListener('click', () => {
//     shToast("login form not availabe", danger, "black")
// })

// ----------------------------------------------------------------------

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {

	e.preventDefault();

	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	if (!email || !password) {
		console.log("Email and password are required.");
		return;
	}

	try {

		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		})

		if (response.ok) {
			const result = await response.json(); // Parse JSON response
			shToast("login successfull", success, "black")
			console.log("Login Response:", result);

			// Store user's name in localStorage
			localStorage.setItem("userName", result.name);

			loginForm.reset(); // Clear form fields
			location.reload()
		} else {
			const errorText = await response.text();
			console.log(errorText);
		}

	} catch (error) {
		console.log(error)
	}

})