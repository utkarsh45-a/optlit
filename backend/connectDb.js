import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/optlit")
		console.log("connected to db")
	} catch (error) {
		console.log(`connection faild ${error}`)
	}
}

export default connectDB;