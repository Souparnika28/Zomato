const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/zomato', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB:', err));

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
