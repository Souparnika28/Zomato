const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to the modular routes
const restaurantRoutes = require('./routes/api');
app.use('/api', restaurantRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// This code creates a simple Express server with API routes and JSON support.
// This code is created by me with the help of youtube tutorials.