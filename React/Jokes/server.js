// const mongoose = require('mongoose');
const express = require("express");
const app = express();

// const { v4: uuidv4 } = require('uuid')

const dontenv = require("dotenv");
dontenv.config();
const PORT = process.env.PORT || 8000;

const colors = require('colors')
colors.enable();

require("./server/config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));
const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

// app.get('/api/jokes', (req,res))


const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`The server is all fired up on port: ${server.address().port}`))
);
