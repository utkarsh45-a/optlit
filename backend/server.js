import express from "express";
import connectDB from "./connectDb.js";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import bcrypt from "bcrypt";
const app = express();

//connecting database

connectDB();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For form data (x-www-form-urlencoded)
app.use(express.json()); // For JSON payloads

app.get("/", (req, res) => {
	res.send("home")
})

app.post("/signup", async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).send('User already exists');
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Save the user
		const newUser = new User({
			username: username,
			email: email,
			password: hashedPassword
		});
		await newUser.save();

		res.status(200).send('Signup successful! You can now login.');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal server error');
	}
})

app.listen(3000, () => {
	console.log("server started");
})