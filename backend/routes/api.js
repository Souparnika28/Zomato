const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API root route working!');
});

module.exports = router;
