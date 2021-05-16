export function createRestaurants(restaurants, restaurantsList) {
  restaurantsList.innerHTML = "";
  for (let restaurant of restaurants) {
    let restItem = document.createElement("li");
    restaurantsList.appendChild(restItem);
    let restName = document.createElement("p");
    restName.innerText = restaurant.name;
    restItem.appendChild(restName);
    let restAddress = document.createElement("p");
    restAddress.innerText = restaurant.address;
    restItem.appendChild(restAddress);
  }
}

export function createHotels(hotels, hotelsList) {
  hotelsList.innerHTML = "";
  for (let hotel of hotels) {
    let hotItem = document.createElement("li");
    hotelsList.appendChild(hotItem);
    let hotName = document.createElement("p");
    hotName.innerText = hotel.name;
    hotItem.appendChild(hotName);
    let hotAddress = document.createElement("p");
    hotAddress.innerText = hotel.address;
    hotItem.appendChild(hotAddress);
  }
}
