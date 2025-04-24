const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust this path based on your structure

// Sample route to get all restaurants
router.get('/restaurants', (req, res) => {
  db.all('SELECT * FROM restaurants', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
});

module.exports = router;
