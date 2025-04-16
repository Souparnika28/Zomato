const listEl = document.getElementById('restaurantList');

function loadRestaurants() {
  fetch('/api/restaurants')
    .then(res => res.json())
    .then(data => {
      listEl.innerHTML = '';
      data.forEach(r => {
        const li = document.createElement('li');
        li.textContent = `${r.name} `;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => deleteRestaurant(r.id);
        li.appendChild(delBtn);
        listEl.appendChild(li);
      });
    });
}

function addRestaurant() {
  const name = document.getElementById('name').value;
  fetch('/api/restaurants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }).then(loadRestaurants);
}

function deleteRestaurant(id) {
  fetch(`/api/restaurants/${id}`, { method: 'DELETE' })
    .then(loadRestaurants);
}

loadRestaurants();
