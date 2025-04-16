// Example of event handling for the "View Details" button on each restaurant card

const buttons = document.querySelectorAll('.restaurant-card button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const restaurantName = event.target.closest('.restaurant-card').querySelector('h3').textContent;
    alert(`You clicked on: ${restaurantName}`);
  });
});
