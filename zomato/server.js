// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Utility to read/write JSON
const readData = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, 'data', file)));
const writeData = (file, data) => fs.writeFileSync(path.join(__dirname, 'data', file), JSON.stringify(data, null, 2));

// --- CRUD for Restaurants ---
app.get('/restaurants', (req, res) => {
    const data = readData('restaurants.json');
    res.json(data);
  });
  
  app.post('/restaurants', (req, res) => {
    const data = readData('restaurants.json');
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    writeData('restaurants.json', data);
    res.status(201).json(newItem);
  });
  
// --- CRUD for Dishes ---
app.get('/dishes', (req, res) => {
    const data = readData('dishes.json');
    res.json(data);
  });
  
  app.post('/dishes', (req, res) => {
    const data = readData('dishes.json');
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    writeData('dishes.json', data);
    res.status(201).json(newItem);
  });
  
// --- CRUD for Orders ---
app.get('/orders', (req, res) => {
    const data = readData('orders.json');
    res.json(data);
  });
  
  app.post('/orders', (req, res) => {
    const data = readData('orders.json');
    const newItem = { id: Date.now(), ...req.body, status: 'Pending' };
    data.push(newItem);
    writeData('orders.json', data);
    res.status(201).json(newItem);
  });
  
  app.put('/orders/:id', (req, res) => {
    const data = readData('orders.json');
    const order = data.find(o => o.id == req.params.id);
    if (order) {
      Object.assign(order, req.body);
      writeData('orders.json', data);
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  });

  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));  