const express = require('express');
const router = express.Router();
const db = require('../db'); // Make sure db.js is one level up

// Get all restaurants
router.get('/restaurants', (req, res) => {
  db.all('SELECT * FROM restaurants', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a new restaurant
router.post('/restaurants', (req, res) => {
  const { name, location, cuisine, rating } = req.body;
  const sql = `INSERT INTO restaurants (name, location, cuisine, rating) VALUES (?, ?, ?, ?)`;
  const params = [name, location, cuisine, rating];

  db.run(sql, params, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, location, cuisine, rating });
  });
});

// Update a restaurant
router.put('/restaurants/:id', (req, res) => {
  const { name, location, cuisine, rating } = req.body;
  const sql = `
    UPDATE restaurants
    SET name = ?, location = ?, cuisine = ?, rating = ?
    WHERE id = ?
  `;
  const params = [name, location, cuisine, rating, req.params.id];

  db.run(sql, params, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updatedID: req.params.id });
  });
});

// Delete a restaurant
router.delete('/restaurants/:id', (req, res) => {
  const sql = `DELETE FROM restaurants WHERE id = ?`;
  db.run(sql, [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.send({ deletedID: req.params.id });
  });
});

module.exports = router;
