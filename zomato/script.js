// Dummy restaurant data
const restaurants = ["Pizza Hut", "Domino's", "Barbeque Nation", "Cafe Coffee Day", "KFC", "Subway"];

function searchRestaurants() {
    const searchBox = document.getElementById("searchBox").value.toLowerCase();
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = ""; // Clear previous results

    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.toLowerCase().includes(searchBox)
    );

    if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach(restaurant => {
            const p = document.createElement("p");
            p.textContent = restaurant;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found</p>";
    }
}
