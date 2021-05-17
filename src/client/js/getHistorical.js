export async function getHistorical(data) {
  const api_key = await getHistoricalWeatherAPI();
  const weatherStation = await getNearbyStation(data, api_key);
  const avgTemp = await getAverages(data, api_key, weatherStation);
  return avgTemp;
}

// fetch api key from server environment
const getHistoricalWeatherAPI = async () => {
  const res = await fetch("http://localhost:8081/historical");
  try {
    const data = await res.text();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};

// get the nearest weather station from the trip location
const getNearbyStation = async (data, key) => {
  const res = await fetch(
    `https://api.meteostat.net/v2/stations/search?query=${data.location}&limit=1`,
    { headers: { "x-api-key": key } }
  );
  try {
    const weatherStation = await res.json();
    return weatherStation.data[0].id;
  } catch (e) {
    console.log("Error: ", e);
  }
};

// get the average temperature for the date of the trip, based on the fetched weather station
const getAverages = async (data, key, station) => {
  const res = await fetch(
    `https://api.meteostat.net/v2/stations/climate?station=${station}`,
    { headers: { "x-api-key": key } }
  );
  try {
    const averages = await res.json();

    for (let month of averages.data) {
      if ((month.month = data.date.month)) return month.tavg;
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};
