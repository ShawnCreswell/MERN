// Common JS import
const express = require("express");
const app = express()
// const port = 8000;

const todos = [];

// req is short for request
// res is short for response
app.get("/api", (req, res) => { //Use exact route
  res.send("Our express api server is now sending this over to the browser");
});

app.post("/api/todos", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  res.json({
    "todos": todos,
    "newTodo": todos[todos.length-1]
  });
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

