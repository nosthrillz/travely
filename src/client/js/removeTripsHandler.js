export function removeTripsHandler() {
  const removeBtn = document.querySelector("#removeTrips");

  removeBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all trips?")) {
      // remove all from mock db on server, then refresh page
      fetch("http://localhost:8081/removeTrips").then(() => location.reload());
    }
  });
}
