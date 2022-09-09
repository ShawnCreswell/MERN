const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{

		setup: {
			type: String,
			required: true,
			minlength: [10, "Setup must be 10 characters long"]
		},
		punchline: {
			type: String,
			required: true,
			minlength: [3, "Punchline must be 3 characters long"]

		}
},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;