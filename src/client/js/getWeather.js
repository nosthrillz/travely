export async function getWeather(data) {
  const api_key = await getWeatherAPI();

  const res = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?&city=${data.location}&key=${api_key}`
  );
  try {
    const weatherData = await res.json();
    let weather = {};

    for (let day of weatherData.data) {
      if (
        day.valid_date ==
        `${data.date.year}-${data.date.month}-${data.date.day}`
      ) {
        weather.img = day.weather.icon;
        weather.status = day.weather.description;
        weather.high = day.max_temp;
        weather.low = day.low_temp;
      }
    }

    return weather;
  } catch (e) {
    console.log("Error: ", e);
  }
}

const getWeatherAPI = async () => {
  const res = await fetch("http://localhost:8081/weather");
  try {
    const data = await res.text();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
