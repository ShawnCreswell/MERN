const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:_id", JokeController.findOneSingleJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/users/update/:_id", JokeController.updateExistingJoke);
  app.delete("/api/users/delete/:_id", JokeController.deleteAnExistingJoke);


};
