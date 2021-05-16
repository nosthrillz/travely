export function removeTripsHandler() {
  const removeBtn = document.querySelector("#removeTrips");

  removeBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all trips?")) {
      fetch("http://localhost:8081/removeTrips").then(() => location.reload());
    }
  });
}
