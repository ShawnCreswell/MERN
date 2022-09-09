const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			minlength: [3, "FirstName must be 3 characters long"]
		},
		lastName: {
			type: String,
			required: true,
			minlength: [3, "LastName must be 3  characters long"]
		}
},
	{ timestamps: true }
);

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;