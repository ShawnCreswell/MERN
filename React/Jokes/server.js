// const mongoose = require('mongoose');
const express = require("express");
const app = express();
const dontenv = require('dotenv');
dontenv.config();

require("./server/config/mongoose.config");

const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);


app.use(express.json(), express.urlencoded({ extended: true }));
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
