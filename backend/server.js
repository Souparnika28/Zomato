const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is the API backend!');
});

app.get('/restaurants', (req, res) => {
  const restaurants = [
    { id: 1, name: 'Restaurant A' },
    { id: 2, name: 'Restaurant B' },
  ];
  res.json(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
