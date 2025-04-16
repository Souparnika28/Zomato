const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const filePath = './backend/restaurants.json';

function readData() {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  
  function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
  
// GET all
app.get('/api/restaurants', (req, res) => {
    res.json(readData());
  });
  
  // POST new
  app.post('/api/restaurants', (req, res) => {
    const data = readData();
    const newRest = { id: Date.now(), ...req.body };
    data.push(newRest);
    writeData(data);
    res.status(201).json(newRest);
  });
  
// PUT update
app.put('/api/restaurants/:id', (req, res) => {
    let data = readData();
    const id = parseInt(req.params.id);
    data = data.map(r => r.id === id ? { ...r, ...req.body } : r);
    writeData(data);
    res.json({ message: 'Updated' });
  });
  
// DELETE
app.delete('/api/restaurants/:id', (req, res) => {
    let data = readData();
    const id = parseInt(req.params.id);
    data = data.filter(r => r.id !== id);
    writeData(data);
    res.json({ message: 'Deleted' });
  });
  
  app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));