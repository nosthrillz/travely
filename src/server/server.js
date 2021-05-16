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

app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}!`);
});

// GEONAMES API     process.env.KEY_GEONAMES
// WEATHERBIT API   process.env.KEY_WEATHER
// PIXABAY API      process.env.KEY_PIXABAY
// METEOSTAT API    process.env.KEY_METEOSTAT

// set up mock db
trips = [];

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.sendStatus(200);
});

// RETRIEVAL: API KEYS
app.get("/pixabay", function (req, res) {
  res.send(process.env.KEY_PIXABAY);
});

app.get("/weather", function (req, res) {
  res.send(process.env.KEY_WEATHER);
});

app.get("/historical", function (req, res) {
  res.send(process.env.KEY_METEOSTAT);
});

// Trips endpoints
app.get("/trips", (req, res) => {
  res.send(trips);
});

app.get("/removeTrips", (req, res) => {
  trips = [];
  res.sendStatus(200);
});

app.post("/addTrip", (req, res) => {
  fetch(
    `http://api.geonames.org/postalCodeSearchJSON?placename=${req.body.location}&maxRows=10&username=nosthrillz`,
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      trips.push({
        hero: req.body.hero,
        location: {
          name: result.postalCodes[0].placeName,
          lat: result.postalCodes[0].lat,
          lon: result.postalCodes[0].lon,
          zip: result.postalCodes[0].postalCode,
        },
        date: req.body.date,
        countdown: req.body.countdown,
        weather: {
          img: req.body.weather.img,
          status: req.body.weather.status,
          high: req.body.weather.high,
          low: req.body.weather.low,
        },
      });
      res.send(trips[trips.length - 1]);
    })
    .catch((error) => console.log(error));
});
