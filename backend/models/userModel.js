import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type:String,
		required:true,
		minLength:3,
		maxLength:20
	},
	email: {
		type:String,
		required:true,
		unique:true,
		trim:true,
		lowercase:true,
		immutable:true
	},
	password: {
		type: String,
		required: true,
		
		
	  }
})

const User = mongoose.model("User", userSchema)

export default User;