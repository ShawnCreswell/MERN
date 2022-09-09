const { response } = require("express");
const { model } = require("mongoose");
const Joke = require("../models/person.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World"
  })
}



// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allDaJokes => res.json({ jokes: allDaJokes}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => {
//       console.log(updatedJoke)
//       res.json({ joke: updatedJoke })
//     })
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };