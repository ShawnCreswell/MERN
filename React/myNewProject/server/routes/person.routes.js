const PersonController = require("../controllers/person.controller");


module.exports = app => {
  app.get("/api", PersonController.index);
}


// module.exports = app => {
//   app.get("/api/person/", PersonController.findAllPerson);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };