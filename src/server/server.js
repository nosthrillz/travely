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

// set up mock db with default entry
trips = [];
trips[0] = {
  hero: "https://recruit4languages.com/app/uploads/2020/05/Paris.jpg",
  location: "Paris",
  date: "20/04/2021",
  countdown: 220,
  weather: {
    img:
      "https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png",
    status: "Sunny",
    high: 16,
    low: 12,
  },
  flights: {
    departure: {
      depDate: "30/04/2021",
      arrDate: "30/04/2021",
      depAir: "ZRH",
      arrAir: "OTP",
      depTime: "08:30",
      arrTime: "10:15",
    },
    return: {
      depDate: "01/05/2021",
      arrDate: "01/05/2021",
      depAir: "OTP",
      arrAir: "ZRH",
      depTime: "16:05",
      arrTime: "17:50",
    },
  },
  restaurants: [
    {
      name: "Linea",
      address: "some address",
    },
    {
      name: "Papila",
      address: "other address",
    },
  ],
  hotels: [
    {
      name: "Ramada Hotels",
      address: "some address",
    },
    {
      name: "Double Tree by Hilton",
      address: "other address",
    },
  ],
};

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/key", function (req, res) {
  res.send(process.env.API_KEY);
});

app.get("/trips", (req, res) => {
  res.send(trips);
});

app.post("/trips/:tripid/flights", (req, res) => {
  console.log("Received object: ", req.body.flights);
  console.log("trip id:", req.params.tripid);

  trips[req.params.tripid].flights = req.body.flights;

  console.log("modified flights: ", trips[req.params.tripid].flights);

  res.send(trips);
});

app.post("/trips/:tripid/restaurants", (req, res) => {
  console.log("Received restaurant: ", req.body);
  console.log("trip id:", req.params.tripid);

  trips[req.params.tripid].restaurants.push(req.body);

  console.log("modified restaurants: ", trips[req.params.tripid].restaurants);

  res.send(trips);
});

app.post("/trips/:tripid/hotels", (req, res) => {
  console.log("Received hotel: ", req.body);
  console.log("trip id:", req.params.tripid);

  trips[req.params.tripid].hotels.push(req.body);

  console.log("modified hotels: ", trips[req.params.tripid].hotels);

  res.send(trips);
});
