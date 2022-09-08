const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
	name: {
		type: String,
		required: [true, "First name is required"],
		minlength: [6, "First name must be at least 6 characters long"]
	}, 
	age: {
		type: Number,
		required: [true, "last name is required"],
		maxlength: [20, "Last name must be at least 6 characters long"]
	}
},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;