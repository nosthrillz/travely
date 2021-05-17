// fetch trips from server mock db
export async function getTrips() {
  const res = await fetch("http://localhost:8081/trips");
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
}
