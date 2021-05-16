import { getTrips } from "./getTrips";
import { createTrips } from "./createTrips";

export const addPlace = async (placeData, trips) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(placeData),
  };
  const response = await fetch("http://localhost:8081/addTrip", requestOptions);

  try {
    const info = await response.json();
    trips = await getTrips();

    // Update UI
    document.querySelector("main").innerHTML = "";
    createTrips(trips);
  } catch (error) {
    console.log(error);
  }
};
