import { listen } from "./listeners";
import { createRestaurants, createHotels } from "./CRUDRestHotels";

import flight_takeoff from "../images/flight_takeoff.png";
import flight_land from "../images/flight_land.png";

export function createTrips(trips) {
  const main = document.querySelector("main");

  if (trips.length == 0) {
    const noTrips = document.createElement("h3");
    noTrips.className = "no-trips";
    noTrips.innerText = "Start by adding a trip...";
    main.appendChild(noTrips);
  } else {
    document.querySelector(".remove-trips").style.display = "flex";

    main.innerHTML = "";

    for (let i = 0; i < trips.length; i++) {
      const section = document.createElement("section");
      section.id = `section-${i}`;
      main.appendChild(section);

      // Hero
      const heroContainer = document.createElement("div");
      heroContainer.className = "hero-container";
      section.appendChild(heroContainer);

      const heroImg = document.createElement("img");
      heroImg.className = "hero-img";
      trips[i].hero != ""
        ? (heroImg.src = trips[i].hero)
        : (heroImg.src =
            "http://www.tourismomag.net/wp-content/themes/fearless/images/missing-image-640x360.png");
      heroContainer.appendChild(heroImg);

      // Trip head
      const tripHeadContainer = document.createElement("div");
      tripHeadContainer.className = "trip-head-container";
      section.appendChild(tripHeadContainer);

      const heroLoc = document.createElement("h1");
      heroLoc.className = "subtitle";
      heroLoc.innerText = trips[i].location.name;
      const heroDate = document.createElement("h2");
      heroDate.innerText =
        trips[i].date.day +
        "." +
        trips[i].date.month +
        "." +
        trips[i].date.year;
      const heroCd = document.createElement("h3");
      heroCd.innerText = `${trips[i].countdown} days until your trip.`;
      tripHeadContainer.appendChild(heroLoc);
      tripHeadContainer.appendChild(heroDate);
      tripHeadContainer.appendChild(heroCd);

      // Weather
      const weatherContainer = document.createElement("div");
      weatherContainer.className = "weather-container";
      section.appendChild(weatherContainer);

      const weatherSubtitle = document.createElement("h2");
      weatherSubtitle.className = "subtitle";
      weatherSubtitle.innerText = "Weather";
      weatherContainer.appendChild(weatherSubtitle);

      if (trips[i].weather.img !== "") {
        const weatherImg = document.createElement("img");
        weatherImg.className = "weather-img";

        trips[i].weather == undefined
          ? (weatherImg.src =
              "http://www.tourismomag.net/wp-content/themes/fearless/images/missing-image-640x360.png")
          : (weatherImg.src = `https://weatherbit.io/static/img/icons/${trips[i].weather.img}.png`);

        weatherContainer.appendChild(weatherImg);
      }

      const weatherStatus = document.createElement("h3");
      weatherStatus.className = "weather-status";
      trips[i].weather == undefined
        ? (weatherStatus.innerText = "Could not fetch weather")
        : (weatherStatus.innerText = trips[i].weather.status);
      weatherContainer.appendChild(weatherStatus);

      const weatherTempContainer = document.createElement("div");
      weatherTempContainer.className = "weather-temp-container";
      weatherContainer.appendChild(weatherTempContainer);

      const weatherTempHigh = document.createElement("div");
      weatherTempHigh.className = "weather-temp-high";
      weatherTempContainer.appendChild(weatherTempHigh);

      const weatherTempHighPara = document.createElement("p");
      weatherTempHighPara.className = "weather-temp";
      trips[i].weather == undefined
        ? (weatherTempHighPara.innerText = "--")
        : (weatherTempHighPara.innerText = trips[i].weather.high);
      weatherTempHigh.appendChild(weatherTempHighPara);

      const weatherTempHighLabel = document.createElement("p");
      weatherTempHighLabel.className = "weather-temp-label";
      weatherTempHighLabel.innerText = "Hi";
      weatherTempHigh.appendChild(weatherTempHighLabel);

      const weatherTempLow = document.createElement("div");
      weatherTempLow.className = "weather-temp-low";
      weatherTempContainer.appendChild(weatherTempLow);

      const weatherTempLowPara = document.createElement("p");
      weatherTempLowPara.className = "weather-temp";
      trips[i].weather == undefined
        ? (weatherTempLowPara.innerText = "--")
        : (weatherTempLowPara.innerText = trips[i].weather.low);
      weatherTempLow.appendChild(weatherTempLowPara);

      const weatherTempLowLabel = document.createElement("p");
      weatherTempLowLabel.className = "weather-temp-label";
      weatherTempLowLabel.innerText = "Lo";
      weatherTempLow.appendChild(weatherTempLowLabel);

      // Flights
      const flightsContainer = document.createElement("div");
      flightsContainer.className = "flights-container";
      section.appendChild(flightsContainer);

      const flightsSubtitle = document.createElement("h2");
      flightsSubtitle.className = "subtitle";
      flightsContainer.appendChild(flightsSubtitle);

      const flightsForm = document.createElement("form");
      flightsForm.id = "flights";
      flightsContainer.appendChild(flightsForm);

      const flightSubtitle = document.createElement("h3");
      flightSubtitle.className = "subtitle";
      flightSubtitle.innerText = "Departure";
      flightsForm.appendChild(flightSubtitle);

      const depFlightDetails = document.createElement("div");
      depFlightDetails.className = "dep-flight-details";
      flightsForm.appendChild(depFlightDetails);

      const depDateDep = document.createElement("input");
      depDateDep.id = "dep-date-dep";
      depDateDep.type = "text";
      depDateDep.placeholder = "DD/MM/YYYY";
      trips[i].flights == undefined
        ? (depDateDep.value = "")
        : (depDateDep.value = trips[i].flights.departure.depDate);
      depFlightDetails.appendChild(depDateDep);

      const depImgDep = document.createElement("img");
      depImgDep.id = "dep-img-dep";
      depImgDep.src = flight_takeoff;
      depFlightDetails.appendChild(depImgDep);

      const depAirDep = document.createElement("input");
      depAirDep.id = "dep-air-dep";
      depAirDep.type = "text";
      depAirDep.placeholder = "Depart airport";
      trips[i].flights == undefined
        ? (depAirDep.value = "")
        : (depAirDep.value = trips[i].flights.departure.depAir);
      depFlightDetails.appendChild(depAirDep);

      const depTimeDep = document.createElement("input");
      depTimeDep.id = "dep-time-dep";
      depTimeDep.type = "text";
      depTimeDep.placeholder = "HH:MM";
      trips[i].flights == undefined
        ? (depTimeDep.value = "")
        : (depTimeDep.value = trips[i].flights.departure.depTime);
      depFlightDetails.appendChild(depTimeDep);

      const depDateArr = document.createElement("input");
      depDateArr.id = "dep-date-arr";
      depDateArr.type = "text";
      depDateArr.placeholder = "DD/MM/YYYY";
      trips[i].flights == undefined
        ? (depDateArr.value = "")
        : (depDateArr.value = trips[i].flights.departure.arrDate);
      depFlightDetails.appendChild(depDateArr);

      const depImgArr = document.createElement("img");
      depImgArr.id = "dep-img-arr";
      depImgArr.src = flight_land;
      depFlightDetails.appendChild(depImgArr);

      const depAirArr = document.createElement("input");
      depAirArr.id = "dep-air-arr";
      depAirArr.type = "text";
      depAirArr.placeholder = "Arrival airport";
      trips[i].flights == undefined
        ? (depAirArr.value = "")
        : (depAirArr.value = trips[i].flights.departure.arrAir);
      depFlightDetails.appendChild(depAirArr);

      const depTimeArr = document.createElement("input");
      depTimeArr.id = "dep-time-arr";
      depTimeArr.type = "text";
      depTimeArr.placeholder = "HH:MM";
      trips[i].flights == undefined
        ? (depTimeArr.value = "")
        : (depTimeArr.value = trips[i].flights.departure.arrTime);
      depFlightDetails.appendChild(depTimeArr);

      const flightSubtitle2 = document.createElement("h3");
      flightSubtitle2.className = "subtitle";
      flightSubtitle2.innerText = "Return";
      flightsForm.appendChild(flightSubtitle2);

      const arrFlightDetails = document.createElement("div");
      arrFlightDetails.className = "arr-flight-details";
      flightsForm.appendChild(arrFlightDetails);

      const arrDateDep = document.createElement("input");
      arrDateDep.id = "arr-date-dep";
      arrDateDep.type = "text";
      arrDateDep.placeholder = "DD/MM/YYYY";
      trips[i].flights == undefined
        ? (arrDateDep.value = "")
        : (arrDateDep.value = trips[i].flights.return.depDate);
      arrFlightDetails.appendChild(arrDateDep);

      const arrImgDep = document.createElement("img");
      arrImgDep.id = "arr-img-dep";
      arrImgDep.src = flight_takeoff;
      arrFlightDetails.appendChild(arrImgDep);

      const arrAirDep = document.createElement("input");
      arrAirDep.id = "arr-air-dep";
      arrAirDep.type = "text";
      arrAirDep.placeholder = "Depart airport";
      trips[i].flights == undefined
        ? (arrAirDep.value = "")
        : (arrAirDep.value = trips[i].flights.return.depAir);
      arrFlightDetails.appendChild(arrAirDep);

      const arrTimeDep = document.createElement("input");
      arrTimeDep.id = "arr-time-dep";
      arrTimeDep.type = "text";
      arrTimeDep.placeholder = "HH:MM";
      trips[i].flights == undefined
        ? (arrTimeDep.value = "")
        : (arrTimeDep.value = trips[i].flights.return.depTime);
      arrFlightDetails.appendChild(arrTimeDep);

      const arrDateArr = document.createElement("input");
      arrDateArr.id = "arr-date-arr";
      arrDateArr.type = "text";
      arrDateArr.placeholder = "DD/MM/YYYY";
      trips[i].flights == undefined
        ? (arrDateArr.value = "")
        : (arrDateArr.value = trips[i].flights.return.arrDate);
      arrFlightDetails.appendChild(arrDateArr);

      const arrImgArr = document.createElement("img");
      arrImgArr.id = "arr-img-arr";
      arrImgArr.src = flight_land;
      arrFlightDetails.appendChild(arrImgArr);

      const arrAirArr = document.createElement("input");
      arrAirArr.id = "arr-air-arr";
      arrAirArr.type = "text";
      arrAirArr.placeholder = "Arrival airport";
      trips[i].flights == undefined
        ? (arrAirArr.value = "")
        : (arrAirArr.value = trips[i].flights.return.arrAir);
      arrFlightDetails.appendChild(arrAirArr);

      const arrTimeArr = document.createElement("input");
      arrTimeArr.id = "arr-time-arr";
      arrTimeArr.type = "text";
      arrTimeArr.placeholder = "HH:MM";
      trips[i].flights == undefined
        ? (arrTimeArr.value = "")
        : (arrTimeArr.value = trips[i].flights.return.arrTime);
      arrFlightDetails.appendChild(arrTimeArr);

      const saveFlight = document.createElement("button");
      saveFlight.id = "saveFlight";
      saveFlight.type = "submit";
      saveFlight.innerText = "Save";
      flightsForm.appendChild(saveFlight);
      listen("flight", saveFlight, i);

      // Restaurants
      const restaurantsContainer = document.createElement("div");
      restaurantsContainer.className = "restaurants-container";
      section.appendChild(restaurantsContainer);

      const restaurantSubtitle = document.createElement("h2");
      restaurantSubtitle.className = "subtitle";
      restaurantSubtitle.innerText = "Restaurants";
      restaurantsContainer.appendChild(restaurantSubtitle);

      const restaurantsForm = document.createElement("form");
      restaurantsForm.id = "restaurants";
      restaurantsContainer.appendChild(restaurantsForm);

      const restName = document.createElement("input");
      restName.id = "rest-name";
      restName.type = "text";
      restName.placeholder = "Restaurant name";
      restaurantsForm.appendChild(restName);

      const restAddress = document.createElement("input");
      restAddress.id = "rest-address";
      restAddress.type = "text";
      restAddress.placeholder = "Restaurant address";
      restaurantsForm.appendChild(restAddress);

      const saveRestaurant = document.createElement("button");
      saveRestaurant.id = "saveRestaurant";
      saveRestaurant.type = "submit";
      saveRestaurant.innerText = "Add";
      restaurantsForm.appendChild(saveRestaurant);
      listen("restaurant", saveRestaurant, i);

      const restaurantsList = document.createElement("ul");
      restaurantsList.id = "restaurants-list";
      restaurantsContainer.appendChild(restaurantsList);
      if (trips[i].restaurants == undefined) {
        const restaurants404 = document.createElement("li");
        restaurants404.innerText = "No restaurants yet. Start adding...";
        restaurants404.className = "no-items";
        restaurantsList.appendChild(restaurants404);
      } else createRestaurants(trips[i].restaurants, restaurantsList);

      // Hotels
      const hotelsContainer = document.createElement("div");
      hotelsContainer.className = "hotels-container";
      section.appendChild(hotelsContainer);

      const hotelSubtitle = document.createElement("h2");
      hotelSubtitle.className = "subtitle";
      hotelSubtitle.innerText = "Hotels";
      hotelsContainer.appendChild(hotelSubtitle);

      const hotelsForm = document.createElement("form");
      hotelsForm.id = "hotels";
      hotelsContainer.appendChild(hotelsForm);

      const hotName = document.createElement("input");
      hotName.id = "hot-name";
      hotName.type = "text";
      hotName.placeholder = "Hotel name";
      hotelsForm.appendChild(hotName);

      const hotAddress = document.createElement("input");
      hotAddress.id = "hot-address";
      hotAddress.type = "text";
      hotAddress.placeholder = "Hotel address";
      hotelsForm.appendChild(hotAddress);

      const saveHotel = document.createElement("button");
      saveHotel.id = "saveHotel";
      saveHotel.type = "submit";
      saveHotel.innerText = "Add";
      hotelsForm.appendChild(saveHotel);
      listen("hotel", saveHotel, i);

      const hotelsList = document.createElement("ul");
      hotelsList.id = "hotels-list";
      hotelsContainer.appendChild(hotelsList);

      if (trips[i].hotels == undefined) {
        const hotels404 = document.createElement("li");
        hotels404.innerText = "No hotels yet. Start adding...";
        hotels404.className = "no-items";
        hotelsList.appendChild(hotels404);
      } else createHotels(trips[i].hotels, hotelsList);
    }
  }
}
