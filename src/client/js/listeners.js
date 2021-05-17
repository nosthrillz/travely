import { createRestaurants, createHotels } from "./CRUDRestHotels";

/* create event listener for the "btn" button
   that updates the trip with the id of "id"
   for the "type" data type (corresponding object key)
*/
export function listen(type, btn, id) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    switch (type) {
      case "flight": {
        const flightsElem = document
          .querySelector(`#section-${id}`)
          .querySelector("#flights");

        const depDateDep = flightsElem.querySelector("#dep-date-dep").value;
        const depAirDep = flightsElem.querySelector("#dep-air-dep").value;
        const depTimeDep = flightsElem.querySelector("#dep-time-dep").value;
        const depDateArr = flightsElem.querySelector("#dep-date-arr").value;
        const depAirArr = flightsElem.querySelector("#dep-air-arr").value;
        const depTimeArr = flightsElem.querySelector("#dep-time-arr").value;

        const arrDateDep = flightsElem.querySelector("#arr-date-dep").value;
        const arrAirDep = flightsElem.querySelector("#arr-air-dep").value;
        const arrTimeDep = flightsElem.querySelector("#arr-time-dep").value;
        const arrDateArr = flightsElem.querySelector("#arr-date-arr").value;
        const arrAirArr = flightsElem.querySelector("#arr-air-arr").value;
        const arrTimeArr = flightsElem.querySelector("#arr-time-arr").value;

        let data = {};

        data.flights = {
          departure: {
            depDate: depDateDep,
            arrDate: depDateArr,
            depAir: depAirDep,
            arrAir: depAirArr,
            depTime: depTimeDep,
            arrTime: depTimeArr,
          },
          return: {
            depDate: arrDateDep,
            arrDate: arrDateArr,
            depAir: arrAirDep,
            arrAir: arrAirArr,
            depTime: arrTimeDep,
            arrTime: arrTimeArr,
          },
        };

        const url = `http://localhost:8081/trips/${id}/flights`;

        // Save flight "data" for trip with id "id"
        postData(url, data).then(alert("Updated!"));
        break;
      }
      case "restaurant": {
        const restaurantsElem = document
          .querySelector(`#section-${id}`)
          .querySelector("#restaurants");

        const restName = restaurantsElem.querySelector("#rest-name").value;
        const restAddress =
          restaurantsElem.querySelector("#rest-address").value;

        let data = {};

        data = {
          name: restName,
          address: restAddress,
        };

        const url = `http://localhost:8081/trips/${id}/restaurants`;

        /* Save restaurant "data" for trip with id "id",
         but also clear "restaurants" list. 
         innerHTML reset is safe because there are no listeners on it
        */
        postData(url, data)
          .then((trips) => {
            const restaurantsList = document
              .querySelector(`#section-${id}`)
              .querySelector("#restaurants-list");

            restaurantsList.innerHTML = "";

            createRestaurants(trips[id].restaurants, restaurantsList);
          })
          .then(() => {
            restaurantsElem.querySelector("#rest-name").value = "";
            restaurantsElem.querySelector("#rest-address").value = "";
          });

        break;
      }
      case "hotel": {
        const hotelsElem = document
          .querySelector(`#section-${id}`)
          .querySelector("#hotels");

        const hotName = hotelsElem.querySelector("#hot-name").value;
        const hotAddress = hotelsElem.querySelector("#hot-address").value;

        let data = {};

        data = {
          name: hotName,
          address: hotAddress,
        };

        const url = `http://localhost:8081/trips/${id}/hotels`;

        /* Save hotel "data" for trip with id "id",
         but also clear "hotels" list. 
         innerHTML reset is safe because there are no listeners on it
        */
        postData(url, data)
          .then((trips) => {
            const hotelsList = document
              .querySelector(`#section-${id}`)
              .querySelector("#hotels-list");

            hotelsList.innerHTML = ""; // safe remove because no listeners

            createHotels(trips[id].hotels, hotelsList);
          })
          .then(() => {
            hotelsElem.querySelector("#hot-name").value = "";
            hotelsElem.querySelector("#hot-address").value = "";
          });

        break;
      }
    }
  });
}

// post request on set URL with user-generated input into "data" object
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (e) {
    console.log("Error:", e);
  }
};
