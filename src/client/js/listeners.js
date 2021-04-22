export function listen(type, btn, id) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (type == "flight") {
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

      postData(url, data).then(alert("Updated!"));
    }
  });
}

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
    console.log(newData);
    return newData;
  } catch (e) {
    console.log("Error:", e);
  }
};
