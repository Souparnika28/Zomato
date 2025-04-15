async function loadRestaurants() {
  const BASE_URL = 'https://your-backend-name.onrender.com'; 
  async function loadRestaurants() {
    const res = await fetch(`${BASE_URL}/restaurants`);
    const restaurants = await res.json();
    const list = document.getElementById('restaurant-list');
    list.innerHTML = '';
    restaurants.forEach(r => {
      const item = document.createElement('li');
      item.textContent = `${r.name} - ${r.cuisine} - ${r.location}`;
      list.appendChild(item);
    });
  }
  
  loadRestaurants();
  
    const data = await res.json();
    const list = document.getElementById('restaurantList');
    list.innerHTML = '';
    data.forEach(r => {
      const item = document.createElement('li');
      item.textContent = `${r.name} (${r.cuisine}) - ${r.location}`;
      list.appendChild(item);
    });
  }
  
  async function addRestaurant() {
    const name = document.getElementById('rname').value;
    const location = document.getElementById('rlocation').value;
    const cuisine = document.getElementById('rcuisine').value;
  
    await fetch('/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, cuisine })
    });
  
    loadRestaurants();
  }
  