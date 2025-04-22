import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();


// const dbUrl = process.env.ATLAS_URL;

const connectDB = async () => {
	try {
		// await mongoose.connect("mongodb://127.0.0.1:27017/optlit")
		await mongoose.connect("mongodb+srv://AMU4518:amu%404518@nexus.0ih8ymq.mongodb.net/optlit?retryWrites=true&w=majority&tls=true");
		console.log("connected to db")
	} catch (error) {
		console.log(`connection faild ${error}`)
	}
}

export default connectDB;