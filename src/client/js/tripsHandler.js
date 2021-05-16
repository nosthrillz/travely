import { createTrips } from "./createTrips";
import { getTrips } from "./getTrips";
import { getPhoto } from "./getPhoto";
import { getWeather } from "./getWeather";
import { getHistorical } from "./getHistorical";
import { addPlace } from "./tripsAdd";
import { convertDate } from "./convertDateFormat";
import { validateDate } from "./validateDate";
import { validateLocation } from "./validateLocation";

let trips = [];
const addTrip = document.querySelector("#addTrip").querySelector("#add");

export function tripsHandler() {
  addTrip.addEventListener("click", async (e) => {
    const date = document.querySelector("#date").value;
    const dateObj = convertDate(date);
    const today = new Date();
    const location = document.querySelector("#where").value;

    if (location == "" && document.querySelector("#date").value == "")
      // Validate if both fields are filled
      alert("Please input a location and date for your trip.");
    else {
      const dateValidation = validateDate(date, dateObj, today);
      const locationValidation = validateLocation(location);

      if (dateValidation.length > 0) {
        // error message from date validation
        alert(dateValidation);
      } else if (locationValidation.length > 0) {
        // error message from location validation
        alert(locationValidation);
      }
      // both fields valid
      else {
        let data = {};
        e.preventDefault();

        const dateSplit = date.split("/");
        data.date = {};
        data.date.day = dateSplit[0];
        data.date.month = dateSplit[1];
        data.date.year = dateSplit[2];
        const dayMs = 1000 * 60 * 60 * 24;
        const countdown = Math.abs(
          Math.ceil((today.getTime() - dateObj.getTime()) / dayMs)
        );

        data.location = location;
        data.countdown = countdown;
        data.hero = await getPhoto(data.location);

        // if in the next 16 days, request weather. Else, get historical average for set date
        if (countdown <= 16) {
          data.weather = await getWeather(data);
        } else {
          const avg = await getHistorical(data);
          data.weather = {
            img: "",
            status: `Trip date is too far.\nAverage temperature for that time of the year is ${avg}`,
            high: "--",
            low: "--",
          };
        }

        await addPlace(data, trips);

        document.querySelector("#where").value = "";
        document.querySelector("#date").value = "";
      }
    }
  });
}
