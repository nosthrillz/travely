import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/trip.scss";

import flight_takeoff from "./images/flight_takeoff.png";
import flight_land from "./images/flight_land.png";

import { createTrips } from "./js/createTrips";

console.log(`Found ${flight_land} and ${flight_takeoff}`);

let trips = [];

const getTrips = async () => {
  const res = await fetch("http://localhost:8081/trips");
  try {
    const data = await res.json();
    console.log("Got trips", data);
    trips = data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

const initialize = async () => {
  await getTrips();

  createTrips(trips);
};

initialize();
