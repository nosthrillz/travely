import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/trip.scss";

import { getTrips } from "./js/getTrips";
import { createTrips } from "./js/createTrips";
import { tripsHandler } from "./js/tripsHandler";
import { removeTripsHandler } from "./js/removeTripsHandler";

let trips = [];

const initialize = async () => {
  trips = await getTrips();

  createTrips(trips);
};

initialize();
tripsHandler();
removeTripsHandler();
