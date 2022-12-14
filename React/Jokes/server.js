const express = require("express");
const app = express();
require("./server/config/mongoose.config");

// const { v4: uuidv4 } = require('uuid')

// Port fort in .env
const dontenv = require("dotenv");
dontenv.config();
const PORT = process.env.PORT || 8000;

// Custom Console log color
const colors = require('colors')
colors.enable();

// Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes 
const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);



const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`The server is all fired up on port: ${server.address().port}`))
);
