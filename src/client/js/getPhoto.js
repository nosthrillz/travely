export async function getPhoto(location) {
  const api_key = await getPixaAPI();

  const res = await fetch(
    `https://pixabay.com/api/?key=${api_key}&q=${location}&image_type=photo`
  );
  try {
    const data = await res.json();
    // return random photo from collection of results for location
    return data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL;
  } catch (e) {
    console.log("Error: ", e);
  }
}

const getPixaAPI = async () => {
  const res = await fetch("http://localhost:8081/pixabay");
  try {
    const data = await res.text();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
