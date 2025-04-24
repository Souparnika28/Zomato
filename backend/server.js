const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
