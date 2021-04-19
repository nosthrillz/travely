const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}!`);
});

// GEONAMES API     process.env.KEY_GEONAMES  "nosthrillz"
// WEATHERBIT API   process.env.KEY_WEATHER   "748981dfce874ef783e7e9ae0c76e1da"
// PIXABAY API      process.env.KEY_PIXABAY   "20862856-a5780ea16b7b7c9aa0237a084"

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/key", function (req, res) {
  res.send(process.env.API_KEY);
});
